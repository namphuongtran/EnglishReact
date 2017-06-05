import Realm from 'realm';
export default class BetterSpeaking extends Realm.Object {}
BetterSpeaking.schema = {
    name: 'BetterSpeaking',
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