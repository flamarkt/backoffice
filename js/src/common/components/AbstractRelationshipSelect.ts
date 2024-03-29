import {Children, Vnode, VnodeDOM} from 'mithril';
import Component, {ComponentAttrs} from 'flarum/common/Component';
import Model from 'flarum/common/Model';
import KeyboardNavigatable from '../utils/KeyboardNavigatable';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import classList from 'flarum/common/utils/classList';
import ItemList from 'flarum/common/utils/ItemList';

export interface RelationshipSelectAttrs<T> extends ComponentAttrs {
    relationship: T | T[] | null
    hasOne?: boolean
    onchange?: (value: T | T[] | null) => {},
    placeholder?: string
    suggest?: T | T[] | (() => Promise<T | T[]>)
    disabled?: boolean
    readonly?: boolean
}

export default abstract class AbstractRelationshipSelect<T extends Model> extends Component<RelationshipSelectAttrs<T>> {
    searchFilter: string = '';
    debouncedSearchFilter: string = '';
    searchDebouncer?: number;
    activeListIndex: number = 0;
    inputIsFocused: boolean = false;
    navigator!: KeyboardNavigatable;
    dropdownIsFocused: boolean = false
    onmousedown!: (event: Event) => void
    cachedSuggestedResults: T[] | null = null
    suggestedPromiseLoaded: boolean = false
    shouldShowSuggestions: boolean = true
    afterSelectionCooldown: boolean = false

    className(): string {
        return '';
    }

    abstract search(query: string): Promise<void>

    abstract results(query: string): T[] | null

    abstract item(model: T, query?: string): Children

    normalizedValue(): T[] {
        if (Array.isArray(this.attrs.relationship)) {
            return this.attrs.relationship;
        }

        if (this.attrs.relationship) {
            return [this.attrs.relationship];
        }

        return [];
    }

    setValue(models: T[]) {
        if (!this.attrs.onchange) {
            return;
        }

        if (this.attrs.hasOne) {
            this.attrs.onchange(models.length ? models[0] : null);
        } else {
            this.attrs.onchange(models);
        }
    }

    oninit(vnode: Vnode<RelationshipSelectAttrs<T>, this>) {
        super.oninit(vnode);

        this.navigator = new KeyboardNavigatable();
        this.navigator
            .onUp(() => this.setIndex(this.activeListIndex - 1, true))
            .onDown(() => this.setIndex(this.activeListIndex + 1, true))
            .onSelect(this.select.bind(this))
            .onRemove(() => {
                const models = this.normalizedValue();

                if (!models.length) {
                    return;
                }

                this.toggleModel(models[models.length - 1]);
            })
            .when(event => {
                // We want to allow selecting with space because it's a common way to select
                // However this interferes with the ability to enter spaces
                // So we will have space act as select, but only if nothing is typed yet
                if (event.key === ' ' && this.searchFilter === '') {
                    event.preventDefault();
                    this.select(event);

                    return false;
                }

                // We don't want Tab to act as select, as this prevent moving from field to field
                return event.key !== 'Tab';
            });
    }

    oncreate(vnode: VnodeDOM<RelationshipSelectAttrs<T>, this>) {
        super.oncreate(vnode);

        // Since we are not calling the original Component.oncreate, we need to copy the dom reference manually
        this.element = vnode.dom;

        this.onmousedown = (event: Event) => {
            const dropdown = vnode.dom.querySelector('.Dropdown-menu');

            if (
                dropdown &&
                dropdown.contains(event.target as HTMLElement)
            ) {
                if (!this.dropdownIsFocused) {
                    this.dropdownIsFocused = true;
                    m.redraw();
                }
            } else {
                if (this.dropdownIsFocused) {
                    this.dropdownIsFocused = false;
                    m.redraw();
                }
            }
        };

        document.addEventListener('mousedown', this.onmousedown);
    }

    onremove(vnode: VnodeDOM<RelationshipSelectAttrs<T>, this>) {
        super.onremove(vnode);

        document.removeEventListener('mousedown', this.onmousedown);
    }

    indexInSelectedModels(model: T) {
        return this.normalizedValue().findIndex(m => m.id() === model.id());
    }

    addModel(model: T) {
        if (this.attrs.hasOne) {
            this.setValue([model]);
        } else {
            const models = this.normalizedValue();

            models.push(model);

            this.setValue(models);
        }
    }

    removeModel(model: T) {
        const index = this.indexInSelectedModels(model);

        if (index !== -1) {
            const models = this.normalizedValue();

            models.splice(index, 1);

            this.setValue(models);
        }
    }

    view() {
        const results = this.results(this.debouncedSearchFilter);

        const directionUp = this.directionUp();

        if (directionUp) {
            results?.reverse();
        }

        return m('.RelationshipSelect', {
            className: classList(this.className(), {
                focused: this.inputIsFocused,
                disabled: this.attrs.disabled,
                readonly: this.attrs.readonly,
                'direction-up': directionUp,
            }),
        }, [
            m('.RelationshipSelect-Form', this.formItems().toArray()),
            this.listAvailableModels(results),
        ]);
    }

    formItems() {
        const items = new ItemList();

        items.add('input', m('.RelationshipSelect-FakeInput-Wrapper', m('.RelationshipSelect-FakeInput.FormControl', {
            className: classList({
                focus: this.inputIsFocused, // deprecated. Check for .focused on .RelationshipSelect
            }),
        }, this.inputItems().toArray())), 20);

        return items;
    }

    inputItems() {
        const items = new ItemList();

        items.add('selected', this.normalizedValue().map(model => {
            return m('span.RelationshipSelect-Selected', {
                onclick: () => {
                    if (this.attrs.disabled || this.attrs.readonly) {
                        return;
                    }

                    this.toggleModel(model);
                },
            }, this.item(model));
        }), 20);

        items.add('control', m('input.FormControl', {
            placeholder: this.attrs.placeholder,
            value: this.searchFilter,
            oninput: (event: Event) => {
                this.searchFilter = (event.target as HTMLInputElement).value;
                this.activeListIndex = 0;
                // So that typing and then erasing text brings back the suggestions
                this.shouldShowSuggestions = true;

                clearTimeout(this.searchDebouncer);

                this.searchDebouncer = setTimeout(() => {
                    this.debouncedSearchFilter = this.searchFilter;
                    this.search(this.debouncedSearchFilter);
                }, 300) as any;
            },
            onkeydown: this.navigator.navigate.bind(this.navigator),
            // Use local methods so that other extensions can extend behaviour
            onfocus: this.oninputfocus.bind(this),
            onblur: this.oninputblur.bind(this),
            onclick: () => {
                // Even if you are already focused on the input, clicking should bring back the suggestions
                this.shouldShowSuggestions = true;
            },
            disabled: this.attrs.disabled,
            readonly: this.attrs.readonly,
        }), 10);

        return items;
    }

    oninputfocus() {
        this.inputIsFocused = true;

        // The special dropdown focus is meant to make mouse interaction more intuitive. As soon as the keyboard is back in focus
        // we can reset that value so that exiting the input through keyboard correctly hides the dropdown
        this.dropdownIsFocused = false;

        if (!this.afterSelectionCooldown) {
            this.shouldShowSuggestions = true;
        }

        // If we click or move to the input without typing anything, we want to autocomplete the empty query
        if (this.debouncedSearchFilter === '') {
            this.search(this.debouncedSearchFilter);
        }
    }

    oninputblur() {
        this.inputIsFocused = false;
    }

    listAvailableModels(models: T[] | null): Children {
        // We need two attributes to hold the dropdown open
        // One is the input focus, managed by the modal
        // The second one is needed because there's a short moment during a click where the focus is lost on the input
        // mousedown triggers first, then the input blur, and only in mouseup can we put focus on the input again
        if (!(this.inputIsFocused || this.dropdownIsFocused) || (Array.isArray(models) && models.length === 0)) {
            return null;
        }

        let content;

        if (models === null) {
            content = LoadingIndicator.component();
        } else {
            content = models.map(this.listAvailableModel.bind(this));
        }

        return m('ul.Dropdown-menu.RelationshipSelect-Dropdown', content);
    }

    listAvailableModel(model: T, index: number) {
        // Using a wrapper around the item to cancel Flarum default li > span rules
        // And this could be useful for customization
        return m('li.RelationshipSelect-Dropdown-Item', {
            'data-index': index,
            className: classList({
                selected: this.indexInSelectedModels(model) !== -1,
                active: this.activeListIndex === index,
            }),
            onmouseover: () => this.activeListIndex = index,
            onclick: this.toggleModel.bind(this, model),
        }, m('.RelationshipSelect-Dropdown-Item-Wrap', this.item(model, this.debouncedSearchFilter)));
    }

    toggleModel(model: T) {
        const index = this.indexInSelectedModels(model);

        if (index !== -1) {
            this.removeModel(model);
        } else {
            this.addModel(model);
        }

        if (this.searchFilter) {
            this.searchFilter = '';
            this.debouncedSearchFilter = '';
            this.activeListIndex = 0;
        }

        this.shouldShowSuggestions = false;
        this.afterSelectionCooldown = true;

        setTimeout(() => {
            this.afterSelectionCooldown = false;
        }, 300);

        // Defer re-focusing to next browser draw
        setTimeout(() => {
            this.onready();
        });
    }

    select(e: KeyboardEvent) {
        const $element = this.getDomElement(this.activeListIndex);

        // If nothing matches, the user probably typed text that doesn't match anything
        // In that case we don't want to submit just yet, but we will delete the text
        // so that typing enter multiple times does end up submitting
        if (!$element.length) {
            this.searchFilter = '';
            this.debouncedSearchFilter = '';
            return;
        }

        $element[0].dispatchEvent(new Event('click'));
    }

    getDomElement(index: number) {
        return this.$(`.RelationshipSelect-Dropdown-Item[data-index="${index}"]`);
    }

    setIndex(index: number, scrollToItem: boolean) {
        const $dropdown = this.$('.RelationshipSelect-Dropdown');

        const indexLength = this.$('.RelationshipSelect-Dropdown-Item').length;

        if (index < 0) {
            index = indexLength - 1;
        } else if (index >= indexLength) {
            index = 0;
        }

        const $item = this.getDomElement(index);
        this.activeListIndex = index;

        // Make it so pressing up or down on an empty field will show the suggestions again
        this.shouldShowSuggestions = true;

        m.redraw();

        if (scrollToItem) {
            const dropdownScroll = $dropdown.scrollTop() || 0;
            const dropdownTop = $dropdown.offset()?.top || 0;
            const dropdownBottom = dropdownTop + ($dropdown.outerHeight() || 0);
            const itemTop = $item.offset()?.top || 0;
            const itemBottom = itemTop + ($item.outerHeight() || 0);

            let scrollTop;
            if (itemTop < dropdownTop) {
                scrollTop = dropdownScroll - dropdownTop + itemTop - parseInt($dropdown.css('padding-top'), 10);
            } else if (itemBottom > dropdownBottom) {
                scrollTop = dropdownScroll - dropdownBottom + itemBottom + parseInt($dropdown.css('padding-bottom'), 10);
            }

            if (typeof scrollTop !== 'undefined') {
                $dropdown.stop(true).animate({scrollTop}, 100);
            }
        }
    }

    onready() {
        // On touch-enabled devices, don't automatically re-focus the field as it's annoying when it constantly brings back the virtual keyboard
        if ('ontouchstart' in document.documentElement) {
            return;
        }

        this.$('input').first().focus().select();
    }

    /**
     * Whether the dropdown should open above the field instead of below
     */
    directionUp(): boolean {
        if (!(this.element instanceof HTMLElement)) {
            return false;
        }

        const bounding = this.element.getBoundingClientRect();

        const spaceAvailableBelow = window.innerHeight - bounding.bottom;

        return spaceAvailableBelow < 200;
    }

    /**
     * Shortcut to be used in the results() implementation to render the suggestions.
     * If the suggestion is a function, its resulting Promise will be executed and the Select will redraw once results are available.
     * If there are zero suggestions, null will be returned to show the spinner identically to a Select without suggestions.
     */
    suggestedResults(): T[] | null {
        if (!this.attrs.suggest || !this.shouldShowSuggestions) {
            return [];
        }

        if (typeof this.attrs.suggest === 'function') {
            if (!this.suggestedPromiseLoaded) {
                this.suggestedPromiseLoaded = true;

                this.attrs.suggest().then(results => {
                    if (Array.isArray(results)) {
                        if (results.length) {
                            this.cachedSuggestedResults = results;
                        }
                    } else if (results) {
                        this.cachedSuggestedResults = [results];
                    }

                    m.redraw();
                });
            }

            return this.cachedSuggestedResults;
        }

        if (Array.isArray(this.attrs.suggest)) {
            return this.attrs.suggest;
        }

        // No need to check for falsy, it was already done at the beginning
        return [this.attrs.suggest];
    }
}
