import { Children, Vnode, VnodeDOM } from 'mithril';
import Component, { ComponentAttrs } from 'flarum/common/Component';
import Model from 'flarum/common/Model';
import KeyboardNavigatable from '../utils/KeyboardNavigatable';
import ItemList from 'flarum/common/utils/ItemList';
export interface RelationshipSelectAttrs<T> extends ComponentAttrs {
    relationship: T | T[] | null;
    hasOne?: boolean;
    onchange?: (value: T | T[] | null) => {};
    placeholder?: string;
    suggest?: T | T[] | (() => Promise<T | T[]>);
    disabled?: boolean;
    readonly?: boolean;
}
export default abstract class AbstractRelationshipSelect<T extends Model> extends Component<RelationshipSelectAttrs<T>> {
    searchFilter: string;
    debouncedSearchFilter: string;
    searchDebouncer?: number;
    activeListIndex: number;
    inputIsFocused: boolean;
    navigator: KeyboardNavigatable;
    dropdownIsFocused: boolean;
    onmousedown: (event: Event) => void;
    cachedSuggestedResults: T[] | null;
    suggestedPromiseLoaded: boolean;
    className(): string;
    abstract search(query: string): Promise<void>;
    abstract results(query: string): T[] | null;
    abstract item(model: T, query?: string): Children;
    normalizedValue(): T[];
    setValue(models: T[]): void;
    oninit(vnode: Vnode<RelationshipSelectAttrs<T>, this>): void;
    oncreate(vnode: VnodeDOM<RelationshipSelectAttrs<T>, this>): void;
    onremove(vnode: VnodeDOM<RelationshipSelectAttrs<T>, this>): void;
    indexInSelectedModels(model: T): number;
    addModel(model: T): void;
    removeModel(model: T): void;
    view(): any;
    formItems(): ItemList<unknown>;
    inputItems(): ItemList<unknown>;
    oninputfocus(): void;
    oninputblur(): void;
    listAvailableModels(models: T[] | null): Children;
    listAvailableModel(model: T, index: number): any;
    toggleModel(model: T): void;
    select(e: KeyboardEvent): void;
    getDomElement(index: number): JQuery<HTMLElement>;
    setIndex(index: number, scrollToItem: boolean): void;
    onready(): void;
    /**
     * Whether the dropdown should open above the field instead of below
     */
    directionUp(): boolean;
    /**
     * Shortcut to be used in the results() implementation to render the suggestions.
     * If the suggestion is a function, its resulting Promise will be executed and the Select will redraw once results are available.
     * If there are zero suggestions, null will be returned to show the spinner identically to a Select without suggestions.
     */
    suggestedResults(): T[] | null;
}
