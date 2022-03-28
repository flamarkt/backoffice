import User from 'flarum/common/models/User';
import AbstractRelationshipSelect from './AbstractRelationshipSelect';
export default class UserRelationshipSelect extends AbstractRelationshipSelect<User> {
    protected resultsCache: Map<string, User[]>;
    className(): string;
    search(query: string): Promise<void>;
    results(query: string): User[] | null;
    item(user: User, query?: string): any[];
}
