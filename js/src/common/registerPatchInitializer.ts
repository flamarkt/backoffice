import app from 'flarum/common/app';
import patchModelHasOneNull from './patchModelHasOneNull';
import patchStoreAllowVerbatimRelationships from './patchStoreAllowVerbatimRelationships';

export default function () {
    // On one hand these need to run as early as possible because they need to override Model.hasOne which is used in other extension's extenders
    // But priority might need to be adjusted because it need to run as late as possible for the null catch to be the most outward override and therefore runs before other overrides
    app.initializers.add('flamarkt-backoffice-patch', () => {
        patchModelHasOneNull();
        patchStoreAllowVerbatimRelationships();
    }, 100);
}
