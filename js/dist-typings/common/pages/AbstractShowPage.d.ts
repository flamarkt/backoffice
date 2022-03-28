import { Vnode } from 'mithril';
import Page, { IPageAttrs } from 'flarum/common/components/Page';
import Model from 'flarum/common/Model';
export default abstract class AbstractShowPage<CustomAttrs extends IPageAttrs = IPageAttrs> extends Page<CustomAttrs> {
    oninit(vnode: Vnode<CustomAttrs, this>): void;
    load(): void;
    newRecord(): Model | null;
    findType(): string;
    requestParams(): any;
    show(model: Model): void;
    /**
     * This method allows saving a model without the values changing in the store before a successful save
     * It's important to use createRecord and model.pushData which don't update the store
     * @param id
     * @param attributes
     */
    saveThroughNewRecord<T extends Model = Model>(id: string, attributes: any): Promise<T>;
}
