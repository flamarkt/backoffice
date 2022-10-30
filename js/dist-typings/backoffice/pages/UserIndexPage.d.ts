import { Vnode } from 'mithril';
import Page from 'flarum/common/components/Page';
import ItemList from 'flarum/common/utils/ItemList';
import UserListState from '../states/UserListState';
export default class UserIndexPage extends Page {
    list: UserListState;
    oninit(vnode: Vnode): void;
    initState(): UserListState;
    filters(): ItemList<unknown>;
    view(): any;
}
