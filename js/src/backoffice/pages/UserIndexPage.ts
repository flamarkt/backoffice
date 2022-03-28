import {Vnode} from 'mithril';
import Page from 'flarum/common/components/Page';
import LinkButton from 'flarum/common/components/LinkButton';
import extractText from 'flarum/common/utils/extractText';
import app from '../app';
import UserListState from '../states/UserListState';
import UserList from '../components/UserList';
import UserSortDropdown from '../components/UserSortDropdown';

export default class UserIndexPage extends Page {
    list!: UserListState;

    oninit(vnode: Vnode) {
        super.oninit(vnode);

        this.list = this.initState();
        this.list.refresh();

        app.setTitle(extractText(app.translator.trans('flamarkt-backoffice.backoffice.users.title')));
        app.setTitleCount(0);
    }

    initState() {
        const params = m.route.param();

        return new UserListState({
            sort: params.sort,
        });
    }

    view() {
        return m('.UserIndexPage', m('.container', [
            m('.Form-group', [
                LinkButton.component({
                    className: 'Button',
                    href: app.route('users.show', {
                        id: 'new',
                    }),
                }, app.translator.trans('flamarkt-backoffice.backoffice.users.new')),
                m(UserSortDropdown, {
                    state: this.list,
                }),
            ]),
            m(UserList, {
                state: this.list,
            }),
        ]));
    }
}
