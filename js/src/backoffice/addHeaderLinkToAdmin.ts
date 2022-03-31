import {extend} from 'flarum/common/extend';
import SessionDropdown from 'flarum/admin/components/SessionDropdown';
import LinkButton from 'flarum/common/components/LinkButton';
import Separator from 'flarum/common/components/Separator';
import app from './app';

export default function () {
    extend(SessionDropdown.prototype, 'items', function (items) {
        // Add a separator between links and logout button, just like in the forum frontend
        if (!items.has('separator')) {
            items.add('separator', Separator.component(), -90);
        }

        // In case a different extension was doing the same, let's just skip
        if (items.has('administration')) {
            return;
        }

        items.add('administration', LinkButton.component({
            icon: 'fas fa-wrench',
            href: app.forum.attribute('adminUrl'),
            external: true,
        }, app.translator.trans('flamarkt-backoffice.lib.header.admin_button')));
    });
}
