import { Children } from 'mithril';
import Component from 'flarum/common/Component';
import ItemList from 'flarum/common/utils/ItemList';
/**
 * Works the same way as Flarum admin's HeaderSecondary
 */
export default class HeaderSecondary extends Component {
    view(): any;
    items(): ItemList<Children>;
}
