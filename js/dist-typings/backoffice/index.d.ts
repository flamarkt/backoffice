import app from './app';
import { common } from '../common/compat';
import { backoffice } from './compat';
export { app, // This export is used from the view file, but not by the extension imports. That other export is in the compat file
common, backoffice, };
