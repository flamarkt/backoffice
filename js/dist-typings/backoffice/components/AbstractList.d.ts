import { Vnode } from 'mithril';
import ItemList from 'flarum/common/utils/ItemList';
import Model from 'flarum/common/Model';
import Component, { ComponentAttrs } from 'flarum/common/Component';
import AbstractListState from '../../common/states/AbstractListState';
export interface AbstractListAttrs<T extends Model> extends ComponentAttrs {
    /**
     * @deprecated use `list` instead
     */
    state: AbstractListState<T>;
    list: AbstractListState<T>;
}
export default class AbstractList<T extends Model> extends Component<AbstractListAttrs<T>> {
    protected static initAttrs<T extends Model>(attrs: AbstractListAttrs<T>): void;
    items(list: AbstractListState<T>): T[];
    topRow(list: AbstractListState<T>): null;
    bottomRowContent(list: AbstractListState<T>): any;
    bottomRow(list: AbstractListState<T>): any;
    tableClassName(): string;
    view(vnode: Vnode<AbstractListAttrs<T>>): any;
    head(): ItemList<any>;
    row(model: T): any;
    rowAttrs(model: T): any;
    columns(model: T): ItemList<any>;
    actions(model: T): ItemList<any>;
}
