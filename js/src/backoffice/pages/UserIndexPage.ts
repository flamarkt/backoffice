import {Vnode} from 'mithril';
import Page from 'flarum/common/components/Page';
import LinkButton from 'flarum/common/components/LinkButton';
import extractText from 'flarum/common/utils/extractText';
import ItemList from 'flarum/common/utils/ItemList';
import app from '../app';
import UserListState from '../states/UserListState';
import SearchInput from '../components/SearchInput';
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

    filters() {
        const items = new ItemList();

        items.add('sort', m(UserSortDropdown, {
            list: this.list,
        }), 100);

        items.add('search', m(SearchInput, {
            initialValue: '',
            onchange: (value: string) => {
                this.list.params.q = value;
                this.list.refresh();
            },
            placeholder: extractText(app.translator.trans('flamarkt-backoffice.backoffice.users.searchPlaceholder')),
        }), 50);

        items.add('separator', m('.BackofficeListFilters--separator'), -10);

        items.add('new', LinkButton.component({
            className: 'Button',
            href: app.route('users.show', {
                id: 'new',
            }),
            icon: 'fas fa-user-plus',
        }, app.translator.trans('flamarkt-backoffice.backoffice.users.new')), -100);

        return items;
    }

    view() {
        return m('.UserIndexPage', m('.container', [
            m('.BackofficeListFilters', this.filters().toArray()),
            m(UserList, {
                list: this.list,
            }),
        ]));
    }
}
