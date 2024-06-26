import Application from 'flarum/common/Application';
import ExtensionData from 'flarum/admin/utils/ExtensionData';
export default class BackofficeApplication extends Application {
    extensionData: ExtensionData;
    history: {
        canGoBack: () => boolean;
        getPrevious: () => void;
        backUrl: () => string;
        back: () => void;
    };
    constructor();
    mount(): void;
    getRequiredPermissions(permission: any): string[];
    load(payload: Application["data"]): void;
    get current(): import("flarum/common/states/PageState").default;
    set current(value: import("flarum/common/states/PageState").default);
    get previous(): import("flarum/common/states/PageState").default;
    set previous(value: import("flarum/common/states/PageState").default);
    route(name: string, params?: Record<string, unknown>): string;
}
