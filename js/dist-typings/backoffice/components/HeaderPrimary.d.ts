/**
 * The `HeaderPrimary` component displays primary header controls. On the
 * default skin, these are shown just to the right of the forum title.
 */
export default class HeaderPrimary extends Component<any, undefined> {
    constructor();
    view(): JSX.Element;
    config(isInitialized: any, context: any): void;
    /**
     * Build an item list for the controls.
     *
     * @return {ItemList}
     */
    items(): ItemList<any>;
}
import Component from "flarum/common/Component";
import ItemList from "flarum/common/utils/ItemList";
