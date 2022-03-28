import { Vnode } from 'mithril';
import AdminNav from 'flarum/admin/components/AdminNav';
import ItemList from 'flarum/common/utils/ItemList';
export default class BackofficeNav extends AdminNav {
    query: string;
    oninit(vnode: Vnode): void;
    items(): ItemList<unknown>;
    extensions(): any[];
    extensionItems(): ItemList<unknown>;
}
