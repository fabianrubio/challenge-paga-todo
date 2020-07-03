import axios from 'axios';

class BankAPI {
  constructor(baseURL) {
    this.http = axios.create({
      baseURL,
    });
  }

  /**
   * Assign a specific path
   */
  async getBankList() {
    return await this.getData('/b/5ea2fa3e98b3d5375233ca89');
  }

  /**
   * Receive the assigned path and make a request
   * @param {String} path
   */
  async getData(path) {
    const response = await this.http.get(path);

    console.info('getData() => ', response.status);

    return response.data;
  }
}

export default BankAPI;
