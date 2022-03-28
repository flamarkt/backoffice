import Application from 'flarum/common/Application';
import Navigation from 'flarum/common/components/Navigation';
import HeaderPrimary from './components/HeaderPrimary';
import HeaderSecondary from './components/HeaderSecondary';
import BackofficeNav from './components/BackofficeNav';
import routes from './routes';
import History from 'flarum/forum/utils/History';
import ExtensionData from 'flarum/admin/utils/ExtensionData';
import AdminApplication from 'flarum/admin/AdminApplication';
import app from 'flarum/admin/app';

export default class BackofficeApplication extends Application {
    extensionData = new ExtensionData();

    history = {
        canGoBack: () => true,
        getPrevious: () => {
        },
        backUrl: () => this.forum.attribute('baseUrl'),
        back: function () {
            window.location = this.backUrl() as any;
        },
    };

    //history = new History();

    constructor() {
        super();

        routes(this);

        // This value is used through the flarum/common/app proxy object
        // I haven't figured out why it's not using the new window.app object
        // The easiest solution is just to have the same store instance used by both
        app.store = this.store;

        // This value is read from ExtensionPage
        app.extensionData = this.extensionData;

        // This value seems to be used somewhere when using the ActiveLinkButton
        // Also necessary if registering routes through the flarum/common/app proxy object
        app.routes = this.routes;
    }

    mount() {
        // These values are set in boot(), before calling mount()
        // Copying them here is the best way to do it as soon as possible without re-implementing boot()
        // Flarum will try to access this value inside ExtensionPage
        app.forum = this.forum;
        // Flarum will try to access this value inside SessionDropdown
        app.session = this.session;

        const defaultRoute = this.forum.attribute('defaultRoute');
        let defaultAction = 'dashboard';

        for (const i in this.routes) {
            if (this.routes[i].path === defaultRoute) defaultAction = i;
        }

        this.routes[defaultAction].path = '/';
        //this.history.push(defaultAction, this.translator.trans('core.forum.header.back_to_index_tooltip'), '/');

        m.route.prefix = '/backoffice';
        super.mount(this.forum.attribute('basePath'));

        m.mount(document.getElementById('app-navigation'), {
            view: () =>
                Navigation.component({
                    className: 'App-backControl',
                    drawer: true,
                }),
        });
        m.mount(document.getElementById('header-navigation'), Navigation);
        m.mount(document.getElementById('header-primary'), HeaderPrimary);
        m.mount(document.getElementById('header-secondary'), HeaderSecondary);
        m.mount(document.getElementById('admin-navigation'), BackofficeNav);
    }

    getRequiredPermissions(permission: any) {
        return AdminApplication.prototype.getRequiredPermissions.call(this, permission);
    }

    load(payload: Application["data"]) {
        super.load(payload);

        // Flarum will try to access this value inside ExtensionPage
        // @ts-ignore Typescript isn't happy, but it's basically the same code as core
        app.data = payload;

        // Flarum will use this to render translations in core components
        app.translator = this.translator;
    }

    // @ts-ignore property with same name intentionally overridden
    get current() {
        // This value is updated by flarum/common/components/Page through the flarum/common/app proxy so it's always updated on the original app object
        // We'll just proxy to that other object
        return app.current;
    }

    set current(value) {
        app.current = value;
    }

    // @ts-ignore property with same name intentionally overridden
    get previous() {
        return app.previous;
    }

    set previous(value) {
        app.previous = value;
    }
}
