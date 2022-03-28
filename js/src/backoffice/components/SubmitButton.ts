import {Children, Vnode} from 'mithril';
import Component, {ComponentAttrs} from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';

export interface SubmitButtonAttrs extends ComponentAttrs {
    exists: boolean
    dirty: boolean
}

export default class SubmitButton extends Component<SubmitButtonAttrs> {
    view(vnode: Vnode<SubmitButtonAttrs>) {
        const {
            exists = false,
            dirty = true,
            ...attrs
        } = vnode.attrs;

        let label: Children = '';

        // Check if children is truthy or is an array containing anything that's truthy
        if (Array.isArray(vnode.children) ? vnode.children.some(a => a) : vnode.children) {
            label = vnode.children;
        } else if (exists) {
            if (dirty) {
                //TODO: translations
                label = 'Save';
            } else {
                label = 'Saved';
            }
        } else {
            label = 'Create';
        }

        return Button.component({
            type: 'submit',
            className: 'Button Button--primary',
            disabled: exists && !dirty,
            ...attrs,
        }, label);
    }
}
