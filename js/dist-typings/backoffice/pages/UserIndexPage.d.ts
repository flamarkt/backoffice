import { Vnode } from 'mithril';
import Page from 'flarum/common/components/Page';
import UserListState from '../states/UserListState';
export default class UserIndexPage extends Page {
    list: UserListState;
    oninit(vnode: Vnode): void;
    initState(): UserListState;
    view(): any;
}
