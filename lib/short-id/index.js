const { nanoid } = require('nanoid');
const DB = require(`${__basedir}/lib/db`);

class ShortID {
  #nanoid = nanoid;

  constructor() {}

  async generateUniqueShortUrl() {
    const id = nanoid(8);
    const shortUrl = `${__config.host}/${id}`;

    try {
      const url = await new DB().urls.getUrl({ shortUrl: shortUrl });
      if (url) return this.generateUniqueShortUrl();
    } catch (error) {
      // TODO: ERROR HANLDER
    }

    return shortUrl;
  }
}

module.exports = ShortID;