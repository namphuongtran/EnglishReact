import Realm from 'realm';
export default class User extends Realm.Object {}
User.schema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
        id: {
            type: 'string',
            indexed: true
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
        // avatar: {
        //     type: 'data',
        //     optional: true
        // },
        createdDate: {
            type: 'date',
            default: new Date()

        },
        updatedDate: {
            type: 'date',
            default: new Date()
        },
        isActive: {
            type: 'bool',
            default: true
        }
    }
};