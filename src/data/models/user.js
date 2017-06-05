import Realm from 'realm';
export default class User extends Realm.Object {}
User.schema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
        id: {
            type: 'string'
        },
        firstName: 'string',
        lastName: 'string',
        email: 'string',
        password: 'string',
        dateOfBirth: {
            type: 'date',
            optional: true
        },
        phone: {
            type: 'string',
            optional: true
        },
        address: {
            type: 'string',
            optional: true
        },
        createdDate: {
            type: 'date'
        }
    }
}