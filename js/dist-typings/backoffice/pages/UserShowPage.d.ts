import ItemList from 'flarum/common/utils/ItemList';
import User from 'flarum/common/models/User';
import AbstractShowPage from '../../common/pages/AbstractShowPage';
export default class UserShowPage extends AbstractShowPage {
    user: User | null;
    saving: boolean;
    dirty: boolean;
    username: string;
    password: string;
    email: string;
    newRecord(): import("flarum/common/Model").default;
    findType(): string;
    show(user: User): void;
    view(): any;
    fields(): ItemList<any>;
    data(): any;
    onsubmit(event: Event): void;
}
