const DB = require(`${__basedir}/lib/db`);
const ShortID = require(`${__basedir}/lib/short-id`);
const checkUrls = require('./helpers/check-urls');

class Urls {
  #checkUrls = checkUrls;

  constructor() {}

  async getUrl(queryObject) {
    return await new DB().urls.getUrl(queryObject);
  }

  async getUrls(queryObject) {
    return await new DB().urls.getUrls(queryObject);
  }

  async createUrl(urlObjectOrArray) {
    if (!Array.isArray(urlObjectOrArray)) urlObjectOrArray = [ urlObjectOrArray ];

    const { newUrls, existingUrls } = await checkUrls(urlObjectOrArray);

    const length = newUrls.length;
    for (let i = 0; i < length; i++){
      newUrls[i].shortUrl = await new ShortID().generateUniqueShortUrl();
    }

    const createdUrls = await new DB().urls.createUrl(newUrls);

    return [ ...createdUrls, ...existingUrls ];
  }
}

module.exports = Urls;