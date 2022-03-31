import {Children} from 'mithril';
import Component from 'flarum/common/Component';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';

/**
 * Works the same way as Flarum admin's HeaderPrimary
 */
export default class HeaderPrimary extends Component {
    view() {
        return m('ul.Header-controls', listItems(this.items().toArray()));
    }

    items(): ItemList<Children> {
        return new ItemList<Children>();
    }
}
