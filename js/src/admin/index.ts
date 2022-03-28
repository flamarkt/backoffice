import app from 'flarum/admin/app';
import {override} from 'flarum/common/extend';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

app.initializers.add('flamarkt-backoffice', () => {
    override(ExtensionPage.prototype, 'content', function (original) {
        if (!this.extension.extra['flamarkt-backoffice'] || !this.extension.extra['flamarkt-backoffice'].settingsInBackoffice) {
            return original();
        }

        return m('.ExtensionPage-settings', m('.container', m('.Form-group', m('a.Button', {
            href: '/backoffice/extension/' + this.extension.id,
        }, app.translator.trans('flamarkt-backoffice.admin.settingsInBackoffice')))));
    });
});
