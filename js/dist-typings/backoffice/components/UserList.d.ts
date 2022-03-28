import User from 'flarum/common/models/User';
import AbstractList from './AbstractList';
export default class UserList extends AbstractList<User> {
    head(): import("flarum/common/utils/ItemList").default<any>;
    columns(user: User): import("flarum/common/utils/ItemList").default<any>;
    actions(user: User): import("flarum/common/utils/ItemList").default<any>;
}
