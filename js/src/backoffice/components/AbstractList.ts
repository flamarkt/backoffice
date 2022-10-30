import {Vnode} from 'mithril';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Button from 'flarum/common/components/Button';
import Placeholder from 'flarum/common/components/Placeholder';
import Model from 'flarum/common/Model';
import Component, {ComponentAttrs} from 'flarum/common/Component';
import app from '../app';
import AbstractListState from '../../common/states/AbstractListState';

export interface AbstractListAttrs<T extends Model> extends ComponentAttrs {
    /**
     * @deprecated use `list` instead
     */
    state: AbstractListState<T>
    list: AbstractListState<T>
}

export default class AbstractList<T extends Model> extends Component<AbstractListAttrs<T>> {
    protected static initAttrs<T extends Model>(attrs: AbstractListAttrs<T>) {
        Component.initAttrs(attrs);

        if (attrs.state) {
            console.warn('AbstractListAttrs.state is deprecated, use .list');
            attrs.list = attrs.state;
        }
    }

    items(list: AbstractListState<T>): T[] {
        return ([] as T[]).concat(...list.pages.map(page => page.items));
    }

    topRow(list: AbstractListState<T>) {
        return null;
    }

    bottomRowContent(list: AbstractListState<T>) {
        if (list.loading) {
            return LoadingIndicator.component();
        } else if (list.moreResults) {
            return Button.component({
                className: 'Button',
                onclick: list.loadMore.bind(list),
            }, app.translator.trans('load-more')); // TODO: actual translation key
        }

        if (list.pages.length === 0 && !list.loading) {
            return Placeholder.component({
                text: app.translator.trans('empty'), // TODO: actual translation key
            });
        }
    }

    bottomRow(list: AbstractListState<T>) {
        const content = this.bottomRowContent(list);

        return content ? m('tr', m('td', {
            colspan: 100,
        }, content)) : null;
    }

    tableClassName() {
        return '';
    }

    view(vnode: Vnode<AbstractListAttrs<T>>) {
        const {list} = vnode.attrs;

        return m('table.Table.ListTable', {
            className: this.tableClassName(),
        }, [
            m('thead', m('tr', this.head().toArray())),
            m('tbody', [
                this.topRow(list),
                this.items(list).map(model => this.row(model)),
                this.bottomRow(list),
            ]),
        ]);
    }

    head(): ItemList<any> {
        const columns = new ItemList();

        columns.add('actions', m('th', 'Actions'), -100); //TODO: translation

        return columns;
    }

    row(model: T) {
        return m('tr', this.rowAttrs(model), this.columns(model).toArray());
    }

    rowAttrs(model: T): any {
        return {};
    }

    columns(model: T): ItemList<any> {
        const columns = new ItemList();

        columns.add('actions', m('td', m('ul.Table-actions', listItems(this.actions(model).toArray()))), -100);

        return columns;
    }

    actions(model: T): ItemList<any> {
        return new ItemList();
    }
}
