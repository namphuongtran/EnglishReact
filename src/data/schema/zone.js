import Realm from 'realm';
export default class Zone extends Realm.Object {}
Zone.schema = {
    name: 'Zone',
    primaryKey: 'id',
    properties: {
        id: {
            type: 'string'
        },
        parentId: {
            type: 'string'
        },
        name: 'string',
        createdDate: {
            type: 'date'
        },
        updatedDate: {
            type: 'date'
        }
    }
}