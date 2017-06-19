import Realm from 'realm';
import User from '../schema/user';
import Zone from '../schema/zone';
import Content from '../schema/content';

export default new Realm({
    schema: [User, Zone, Content]
});
