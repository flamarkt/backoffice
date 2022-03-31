import {extend, override} from 'flarum/common/extend';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Switch from 'flarum/common/components/Switch';
import app from './app';

export default function () {
    override(ExtensionPage.prototype, 'content', function (original: any) {
        // If the user has admin access, show as normal
        if (app.forum.attribute('adminUrl')) {
            return original();
        }

        const settings = app.extensionData.getSettings(this.extension.id);

        // If there are no settings, show as normal
        if (!settings) {
            return original();
        }

        // Show a special message so the user isn't confused why they don't see or can't edit the values
        return m('.ExtensionPage-settings', m('.container', m('h3.ExtensionPage-subHeader', app.translator.trans('flamarkt-backoffice.backoffice.settingsNotAvailableForNonAdmin'))));
    });

    extend(ExtensionPage.prototype, 'header', function (content) {
        if (app.forum.attribute('adminUrl')) {
            return;
        }

        content.forEach(vdom => {
            // .ExtensionPage-header level
            (vdom && vdom.children || []).forEach(vdom => {
                // .container level
                (vdom && vdom.children || []).forEach(vdom => {
                    // .ExtensionPage-headerItems level
                    (vdom && vdom.children || []).forEach(vdom => {
                        if (vdom && vdom.tag === Switch) {
                            // Disable extension checkbox
                            vdom.attrs.disabled = true;
                        }
                    });
                });
            });
        });
    });
}
