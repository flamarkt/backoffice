import app from 'flarum/admin/app';
import {extend, override} from 'flarum/common/extend';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import SessionDropdown from 'flarum/admin/components/SessionDropdown';
import LinkButton from 'flarum/common/components/LinkButton';
import Separator from 'flarum/common/components/Separator';
import registerPatchInitializer from '../common/registerPatchInitializer';

app.initializers.add('flamarkt-backoffice', () => {
    override(ExtensionPage.prototype, 'content', function (original) {
        if (!this.extension.extra['flamarkt-backoffice'] || !this.extension.extra['flamarkt-backoffice'].settingsInBackoffice) {
            return original();
        }

        return m('.ExtensionPage-settings', m('.container', m('.Form-group', m('a.Button', {
            href: app.forum.attribute('backofficeUrl') + '/extension/' + this.extension.id,
        }, app.translator.trans('flamarkt-backoffice.admin.settingsInBackoffice')))));
    });

    extend(SessionDropdown.prototype, 'items', function (items) {
        items.add('flamarkt-backoffice', LinkButton.component({
            icon: 'fas fa-tachometer-alt',
            href: app.forum.attribute('backofficeUrl'),
            external: true,
        }, app.translator.trans('flamarkt-backoffice.lib.header.backoffice_button')));

        // Add a separator between links and logout button, just like in the forum frontend
        if (!items.has('separator')) {
            items.add('separator', Separator.component(), -90);
        }
    });
});

registerPatchInitializer();
