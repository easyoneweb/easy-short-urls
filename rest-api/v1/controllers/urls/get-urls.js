const { Urls } = require(`${__basedir}/lib`);

async function getUrls(req, res) {
  try {
    const urls = await new Urls().getUrls();
    res.status(200).json(urls);
  } catch (error) {
    // TODO: ERROR HANLDER
    res.status(400).json({ error: true, message: 'Get Urls' });
  }
}

module.exports = getUrls;