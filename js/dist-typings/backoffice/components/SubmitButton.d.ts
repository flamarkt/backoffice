import { Vnode } from 'mithril';
import Component, { ComponentAttrs } from 'flarum/common/Component';
export interface SubmitButtonAttrs extends ComponentAttrs {
    exists: boolean;
    dirty: boolean;
}
export default class SubmitButton extends Component<SubmitButtonAttrs> {
    view(vnode: Vnode<SubmitButtonAttrs>): Mithril.Vnode;
}
