import AsyncStorage from '@react-native-community/async-storage';

class DB {
  constructor(storage_key) {
    this.storage_key = storage_key;
  }

  /**
   * Retrieve value from ocal database
   */
  async loadData() {
    try {
      const getData = await AsyncStorage.getItem(this.storage_key);

      console.info('loadData() =>', getData);

      return JSON.parse(getData);
    } catch (error) {
      console.error('Application Error. Cannot load data.', error);
    }

    return null;
  }

  /**
   * Store values in the local database
   * @param {*} value
   */
  async storeData(value) {
    try {
      const jsonValue = JSON.stringify(value);

      console.info('storeData =>', value);

      await AsyncStorage.setItem(this.storage_key, jsonValue);
    } catch (error) {
      console.error('Application Error. Cannot store data.', error);
    }
  }
}

export default DB;
