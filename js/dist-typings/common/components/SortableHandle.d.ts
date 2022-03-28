import { ClassComponent, Vnode } from 'mithril';
export interface SortableHandleAttrs {
    elementTag?: string;
    className?: string;
    disabled?: boolean;
}
export default class SortableHandle implements ClassComponent<SortableHandleAttrs> {
    view(vnode: Vnode<SortableHandleAttrs>): any;
}
