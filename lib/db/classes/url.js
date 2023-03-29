const UrlModel = require('../models/url');

class Url {
  #UrlModel = UrlModel;

  constructor() {}

  async getUrls(queryObject) {
    return await this.#UrlModel.find(queryObject);
  }

  async getUrl(queryObject) {
    return await this.#UrlModel.findOne(queryObject);
  }

  async createUrl(urlObjectOrArray) {
    return await this.#UrlModel.create(urlObjectOrArray);
  }
}

module.exports = Url;