import app from 'flarum/common/app';
import Component, {ComponentAttrs} from 'flarum/common/Component';
import Dropdown from 'flarum/common/components/Dropdown';
import Button from 'flarum/common/components/Button';
import Model from 'flarum/common/Model';
import AbstractListState from '../states/AbstractListState';

export interface SortDropdownAttrs extends ComponentAttrs {
    /**
     * @deprecated use `list` instead
     */
    state: AbstractListState<Model>
    list: AbstractListState<Model>
    updateUrl?: boolean
}

export interface SortOptions {
    [key: string]: string
}

export default abstract class AbstractSortDropdown<T extends SortDropdownAttrs> extends Component<T> {
    protected static initAttrs<T extends SortDropdownAttrs>(attrs: T) {
        if (attrs.state) {
            console.warn('SortDropdownAttrs.state is deprecated, use .list');
            attrs.list = attrs.state;
        }
    }

    view() {
        const options = this.options();

        const activeSort = this.activeSort();

        return m(Dropdown, {
            className: 'SortDropdown ' + this.className(),
            buttonClassName: 'Button',
            label: options[activeSort],
            icon: 'fas fa-sort-amount-' + (this.sortIsUp(activeSort) ? 'up' : 'down'),
        }, Object.keys(options).map((value) => {
            const label = options[value];
            const active = value === this.activeSort();

            return m(Button, {
                icon: active ? 'fas fa-check' : true,
                onclick: () => {
                    this.applySort(value);
                },
                active,
            }, label);
        }));
    }

    className(): string {
        return '';
    }

    activeSort(): string {
        return this.attrs.list.params.sort || this.defaultSort();
    }

    sortIsUp(sort: string) {
        return sort.substr(0, 1) !== '-';
    }

    applySort(sort: string) {
        // Clone params otherwise it causes a page refresh even without m.route.set
        const params = {...m.route.param()};

        if (this.defaultSort() === sort) {
            delete this.attrs.list.params.sort;
            delete params.sort;
        } else {
            this.attrs.list.params.sort = sort;
            params.sort = sort;
        }

        if (this.attrs.updateUrl) {
            delete params.key;

            // @ts-ignore
            const {routeName} = app.current.data;

            m.route.set(app.route(routeName, params));
        } else {
            this.attrs.list.refresh();
        }
    }

    abstract options(): SortOptions

    defaultSort(): string {
        return Object.keys(this.options())[0];
    }
}

