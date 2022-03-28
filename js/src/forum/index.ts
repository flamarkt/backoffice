import app from 'flarum/forum/app';
import {extend} from 'flarum/common/extend';
import SessionDropdown from 'flarum/forum/components/SessionDropdown';
import LinkButton from 'flarum/common/components/LinkButton';
import {common} from '../common/compat';
import patchModelHasOneNull from '../common/patchModelHasOneNull';
import patchStoreAllowVerbatimRelationships from '../common/patchStoreAllowVerbatimRelationships';

export {
    common,
};

app.initializers.add('flamarkt-backoffice', () => {
    extend(SessionDropdown.prototype, 'items', function (items) {
        if (app.forum.attribute('backofficeUrl')) {
            items.add('flamarkt-backoffice', LinkButton.component({
                icon: 'fas fa-tachometer-alt',
                href: app.forum.attribute('backofficeUrl'),
                target: '_blank',
            }, app.translator.trans('flamarkt-backoffice.forum.nav.backoffice')));
        }
    });
});

app.initializers.add('flamarkt-backoffice-patch', () => {
    patchModelHasOneNull();
    patchStoreAllowVerbatimRelationships();
}, 100);
