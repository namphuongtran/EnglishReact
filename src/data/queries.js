import RepositoryBase from './database/repositoryBase';

class Queries {

    /* a typical query */
    getUser(filterValue) {
        let filter = null;
        if (filterValue) {
            filter = `email = ${filterValue}`;
        }
        let results = RepositoryBase
            .getInstance()
            .query('User', filter);

        return results;
    }

    /* return some JSON data that we originally stored in the Realm as a string */
    getUserJson() {
        let results = RepositoryBase
            .getInstance()
            .query('User');

        if (results.length) {
            let parsed = JSON.parse(results[0].User);
            return parsed.User;
        }
        return null;
    }
}
export default new Queries();