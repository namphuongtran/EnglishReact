import realm from './database';
import User from '../schema/user';

export default class UserRepository {
    static createUser(user) {
        console.log(user);
        realm.write(() => {
            let user = realm.create('User', user);
        });
    };

    // Update user with new info keyed off the id
    static updateUser(user) {
        realm.write(() => {
            let user = realm.create('User', user, true);
        });
    };

    static deleteUser(userId) {
        let users = getUsers();
        let userToDelete = users.filtered('id = $0', userId);
        realm.write(() => {
            let user = realm.delete(userToDelete);
        });
    };

    static getUsers() {
        return realm.objects('User');
    };

    static searchUser(keyword) {
        let users = getUsers();
        return users.filtered('email = "' + keyword + '" OR firstName BEGINSWITH "' + keyword + '" OR lastName BEGINSWITH "' + keyword + '"');
    };

    static findAllUser(sortBy) {
        if (!sortBy) 
            sortBy = [
                [
                    'createdDate', true
                ],
                ['updatedDate', true]
            ];
        return realm
            .objects('User')
            .sorted(sortBy);
    }
};
