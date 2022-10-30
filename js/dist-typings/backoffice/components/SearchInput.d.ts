import { ClassComponent, Vnode } from 'mithril';
export interface SearchInputAttrs {
    initialValue: string;
    onchange: (value: string) => void;
    placeholder: string;
}
export default class SearchInput implements ClassComponent<SearchInputAttrs> {
    value: string;
    activeValue: string;
    debounce: number;
    oninit(vnode: Vnode<SearchInputAttrs, this>): any;
    view(vnode: Vnode<SearchInputAttrs, this>): any;
}
