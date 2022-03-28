import DefaultResolver from 'flarum/common/resolvers/DefaultResolver';
import ExtensionPage, {ExtensionPageAttrs} from 'flarum/admin/components/ExtensionPage';
import app from '../app';

/**
 * Same as Flarum's own ExtensionPageResolver but we need to copy it because it's not exported
 */
export default class ExtensionPageResolver<Attrs extends ExtensionPageAttrs = ExtensionPageAttrs,
    RouteArgs extends Record<string, unknown> = {}> extends DefaultResolver<Attrs, ExtensionPage<Attrs>, RouteArgs> {
    static extension: string | null = null;

    onmatch(args: Attrs & RouteArgs, requestedPath: string, route: string) {
        const extensionPage = app.extensionData.getPage<Attrs>(args.id);

        if (extensionPage) {
            return extensionPage;
        }

        return super.onmatch(args, requestedPath, route);
    }
}
