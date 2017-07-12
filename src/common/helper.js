import {AsyncStorage} from 'react-native';
import Constants from './constants';
export default class Helper {
    static async storeToken(accessToken) {
        try {
            await AsyncStorage.setItem(Constants.ACCESS_TOKEN, accessToken);
        } catch (error) {
            console.log('Some thing went wrong, can not saving data access token to app.');
        }
    };

    static async getToken() {
        let token = null;
        try {
            token = await AsyncStorage.getItem(Constants.ACCESS_TOKEN);
        } catch (error) {
            console.log('Error retrieving data, can not get data access token.');
        }
        return token;
    };

    static async removeToken() {
        try {
            await AsyncStorage.removeItem(Constants.ACCESS_TOKEN);
        } catch (error) {
            console.log('Can not remove data access token.');
        }
    };
}