import {ClassComponent, Vnode} from 'mithril';
import icon from 'flarum/common/helpers/icon';

export interface SearchInputAttrs {
    initialValue: string
    onchange: (value: string) => void
    placeholder: string
}

export default class SearchInput implements ClassComponent <SearchInputAttrs> {
    value: string = ''
    activeValue: string = ''
    debounce: number = 0

    oninit(vnode: Vnode<SearchInputAttrs, this>): any {
        this.value = vnode.attrs.initialValue;
        this.activeValue = this.value;
    }

    view(vnode: Vnode<SearchInputAttrs, this>) {
        return m('.Search', m('.Search-input', [
            m('input.FormControl', {
                type: 'search',
                value: this.value,
                oninput: (event: InputEvent) => {
                    this.value = (event.target as HTMLInputElement).value;
                    clearTimeout(this.debounce);

                    this.debounce = setTimeout(() => {
                        this.activeValue = this.value;
                        vnode.attrs.onchange(this.value);
                        m.redraw();
                    }, 300) as any as number;
                },
                placeholder: vnode.attrs.placeholder,
            }),
            this.activeValue ? m('button.Search-clear.Button.Button--icon.Button--link', {
                type: 'button',
                onclick: () => {
                    this.value = '';
                    this.activeValue = '';
                    vnode.attrs.onchange('');
                },
            }, icon('fas fa-times-circle')) : null,
        ]));
    }
}
