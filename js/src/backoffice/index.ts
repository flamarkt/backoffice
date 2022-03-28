// app must be imported before anything else, otherwise it messed up imports in the compat files
import app from './app';
import {common} from '../common/compat';
import {backoffice} from './compat';
import patchModelHasOneNull from '../common/patchModelHasOneNull';
import patchStoreAllowVerbatimRelationships from '../common/patchStoreAllowVerbatimRelationships';
import registerSettings from './registerSettings';
import hideSettingsAndPermissionsIfNotAdmin from './hideSettingsAndPermissionsIfNotAdmin';

export {
    app, // This export is used from the view file, but not by the extension imports. That other export is in the compat file
    common,
    backoffice,
};

app.initializers.add('flamarkt-backoffice', () => {
    registerSettings();
    hideSettingsAndPermissionsIfNotAdmin();
});

// On one hand these need to run as early as possible because they need to override Model.hasOne which is used in other extension's extenders
// But priority might need to be adjusted because it need to run as late as possible for the null catch to be the most outward override and therefore runs before other overrides
app.initializers.add('flamarkt-backoffice-patch', () => {
    patchModelHasOneNull();
    patchStoreAllowVerbatimRelationships();
}, 100);
