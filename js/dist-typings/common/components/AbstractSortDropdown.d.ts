import Component, { ComponentAttrs } from 'flarum/common/Component';
import Model from 'flarum/common/Model';
import AbstractListState from '../states/AbstractListState';
export interface SortDropdownAttrs extends ComponentAttrs {
    /**
     * @deprecated use `list` instead
     */
    state: AbstractListState<Model>;
    list: AbstractListState<Model>;
    updateUrl?: boolean;
}
export interface SortOptions {
    [key: string]: string;
}
export default abstract class AbstractSortDropdown<T extends SortDropdownAttrs> extends Component<T> {
    protected static initAttrs<T extends SortDropdownAttrs>(attrs: T): void;
    view(): any;
    className(): string;
    activeSort(): string;
    sortIsUp(sort: string): boolean;
    applySort(sort: string): void;
    abstract options(): SortOptions;
    defaultSort(): string;
}
