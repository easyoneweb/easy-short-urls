const { Urls } = require(`${__basedir}/lib`);

async function getUrl(req, res) {
  try {
    const urls = await new Urls().getUrl(req.body);
    res.status(200).json(urls);
  } catch (error) {
    // TODO: ERROR HANLDER
    res.status(400).json({ error: true, message: 'Get Url' });
  }
}

module.exports = getUrl;