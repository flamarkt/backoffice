// app must be imported before anything else, otherwise it messed up imports in the compat files
import app from './app';
import {common} from '../common/compat';
import {backoffice} from './compat';
import addHeaderLinkToAdmin from './addHeaderLinkToAdmin';
import registerSettings from './registerSettings';
import hideSettingsAndPermissionsIfNotAdmin from './hideSettingsAndPermissionsIfNotAdmin';
import registerPatchInitializer from '../common/registerPatchInitializer';

export {
    app, // This export is used from the view file, but not by the extension imports. That other export is in the compat file
    common,
    backoffice,
};

app.initializers.add('flamarkt-backoffice', () => {
    addHeaderLinkToAdmin();
    registerSettings();
    hideSettingsAndPermissionsIfNotAdmin();
});

registerPatchInitializer();
