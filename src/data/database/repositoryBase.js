import Realm from 'realm';
import Database from './database';
import User from '../models/user';
import BetterSpeaking from '../models/betterSpeaking';
import ConferencePresentation from '../models/conferencePresentation';

export const greRealm = new Realm({
    schema: [User, BetterSpeaking, ConferencePresentation]
});

/*class RepositoryBase {

    modelSchema = [
        ModelA,
        ModelB,
        ModelC
    ];

    activeInstancePath = (myLocalRealmPath)

    getInstance() {
        let instance = this.activeInstancePath;
        if(!instance) {
            throw new Error('RepositoryBase.js :: Active Instance Not Set!');
        }
        return instance;
    }

    // note: this is where you would also setInstance and define a constant, or other method for the instance path 
}*/