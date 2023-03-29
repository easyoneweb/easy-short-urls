const { Urls } = require(`${__basedir}/lib`);

async function getUrlsByQuery(req, res) {
  try {
    const urls = await new Urls().getUrls(req.body);
    res.status(200).json(urls);
  } catch (error) {
    // TODO: ERROR HANLDER
    res.status(400).json({ error: true, message: 'Get Urls By Query' });
  }
}

module.exports = getUrlsByQuery;