import DashboardPage from './pages/DashboardPage';
import UserIndexPage from './pages/UserIndexPage';
import UserShowPage from './pages/UserShowPage';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import User from 'flarum/common/models/User';
import ExtensionPageResolver from './resolvers/ExtensionPageResolver';
import BackofficeApplication from './BackofficeApplication';

export default function (app: BackofficeApplication) {
    app.routes = {
        dashboard: {path: '/dashboard', component: DashboardPage},
        'users.index': {path: '/users', component: UserIndexPage},
        'users.show': {path: '/users/:id', component: UserShowPage},
        extension: {path: '/extension/:id', component: ExtensionPage, resolverClass: ExtensionPageResolver},
    };

    app.route.user = (user: User) => {
        return app.route('users.show', {
            id: user.id(),
        });
    };
}
