const Url = require('./classes/url');

class DB {
  constructor() {
    this.urls = new Url();
  }
}

module.exports = DB;