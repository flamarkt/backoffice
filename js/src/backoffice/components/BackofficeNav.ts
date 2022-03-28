import {Vnode} from 'mithril'
import AdminNav from 'flarum/admin/components/AdminNav';
import ItemList from 'flarum/common/utils/ItemList';
import LinkButton from 'flarum/common/components/LinkButton';
import ExtensionLinkButton from 'flarum/admin/components/ExtensionLinkButton';
import app from '../app';
import ActiveLinkButton from '../../common/components/ActiveLinkButton';

// @ts-ignore view method is treated as abstract
export default class BackofficeNav extends AdminNav {
    query: string = '';

    oninit(vnode: Vnode) {
        super.oninit(vnode);

        this.query = '';
    }

    items() {
        const items = new ItemList();

        items.add('dashboard', LinkButton.component({
            href: app.route('dashboard'),
            icon: 'far fa-chart-bar',
        }, app.translator.trans('flamarkt-backoffice.backoffice.nav.dashboard')), 80);

        items.add('users', ActiveLinkButton.component({
            href: app.route('users.index'),
            icon: 'fas fa-user',
            activeRoutes: [
                'users.*',
            ],
        }, app.translator.trans('flamarkt-backoffice.backoffice.nav.users')), 60);

        items.add('search', m('.Search-input', m('input.FormControl.SearchBar', {
            type: 'search',
            value: this.query,
            oninput: (event: InputEvent) => {
                this.query = (event.target as HTMLInputElement).value;
            },
            placeholder: app.translator.trans('flamarkt-backoffice.backoffice.nav.searchPlaceholder')
        })), -10);

        return items;
    }

    extensions() {
        let extensions: any[] = [];

        Object.keys(app.data.extensions).forEach((id) => {
            const extension = app.data.extensions[id];

            if (!extension.extra['flamarkt-backoffice'] || !extension.extra['flamarkt-backoffice'].showInBackoffice) {
                return;
            }

            extensions.push(extension);
        });

        return extensions;
    }

    extensionItems() {
        const items = new ItemList();

        this.extensions().map((extension) => {
            const query = this.query.toUpperCase();
            const title = extension.extra['flarum-extension'].title;

            if (!query || title.toUpperCase().includes(query) || extension.description.toUpperCase().includes(query)) {
                items.add(`extension-${extension.id}`, ExtensionLinkButton.component({
                    href: app.route('extension', {id: extension.id}),
                    extensionId: extension.id,
                    className: 'ExtensionNavButton',
                    title: extension.description
                }, title));
            }
        });

        return items;
    }
}
