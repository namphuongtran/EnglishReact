import Realm from 'realm';
export default class ConferencePresentation extends Realm.Object {}
ConferencePresentation.schema = {
    name: 'ConferencePresentation',
    primaryKey: 'id',
    properties: {
        id: {
            type: 'string'
        },
        name: 'string',
        createdDate: {
            type: 'date'
        }
    }
}