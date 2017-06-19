import Realm from 'realm';
export default class Content extends Realm.Object {}
Content.schema = {
    name: 'Content',
    primaryKey: 'id',
    properties: {
        id: {
            type: 'string'
        },
        headline: 'string',
        teaser: 'string',
        description: {
            type: 'string',
            optional: true
        },
        picture: {
            type: 'data',
            optional: true
        },
        createdDate: {
            type: 'date'
        },
        updatedDate: {
            type: 'date'
        },
        isActive: 'bool'
    }
}