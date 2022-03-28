import DefaultResolver from 'flarum/common/resolvers/DefaultResolver';
import ExtensionPage, { ExtensionPageAttrs } from 'flarum/admin/components/ExtensionPage';
/**
 * Same as Flarum's own ExtensionPageResolver but we need to copy it because it's not exported
 */
export default class ExtensionPageResolver<Attrs extends ExtensionPageAttrs = ExtensionPageAttrs, RouteArgs extends Record<string, unknown> = {}> extends DefaultResolver<Attrs, ExtensionPage<Attrs>, RouteArgs> {
    static extension: string | null;
    onmatch(args: Attrs & RouteArgs, requestedPath: string, route: string): new () => ExtensionPage<Attrs>;
}
