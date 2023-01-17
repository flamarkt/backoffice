import {Vnode} from 'mithril';
import Component from 'flarum/common/Component';
import TextEditor from 'flarum/common/components/TextEditor';
import app from '../app';

export interface RichTextInputAttrs {
    value: string
    onchange: (value: string) => void
    placeholder?: string
    disabled?: boolean
}

export default class RichTextInput extends Component<RichTextInputAttrs> {
    // We can't use the TextEditor component without having a composer object where the editor can be written to
    composer = {
        editor: null,
    };

    oninit(vnode: Vnode) {
        super.oninit(vnode);

        // We need to patch our way through the global app object because of https://github.com/flarum/markdown/pull/28
        // which made the markdown toolbar only work through the global app.composer object
        // This means the toolbar will not work as expected if there are multiple rich inputs on the same page
        // TODO: remove when possible
        // @ts-ignore
        app.composer = this.composer;
    }

    view() {
        return m('.FormControl.FormControl--editor', TextEditor.component({
            composer: this.composer,
            ...this.attrs,
        }));
    }
}
