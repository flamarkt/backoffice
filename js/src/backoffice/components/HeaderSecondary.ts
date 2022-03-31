import {Children} from 'mithril';
import Component from 'flarum/common/Component';
import LinkButton from 'flarum/common/components/LinkButton';
import SessionDropdown from 'flarum/admin/components/SessionDropdown';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';
import app from '../app';

/**
 * Works the same way as Flarum admin's HeaderSecondary
 */
export default class HeaderSecondary extends Component {
    view() {
        return m('ul.Header-controls', listItems(this.items().toArray()));
    }

    items(): ItemList<Children> {
        const items = new ItemList<Children>();

        items.add('help', LinkButton.component({
            href: 'https://docs.flarum.org/troubleshoot',
            icon: 'fas fa-question-circle',
            external: true,
        }, app.translator.trans('core.admin.header.get_help')));

        items.add('session', SessionDropdown.component());

        return items;
    }
}
