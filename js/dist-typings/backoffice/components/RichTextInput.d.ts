import { Vnode } from 'mithril';
import Component from 'flarum/common/Component';
export interface RichTextInputAttrs {
    value: string;
    onchange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}
export default class RichTextInput extends Component<RichTextInputAttrs> {
    composer: {
        editor: null;
    };
    oninit(vnode: Vnode): void;
    view(): any;
}
