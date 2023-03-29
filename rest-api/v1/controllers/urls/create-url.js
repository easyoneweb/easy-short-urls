const { Urls } = require(`${__basedir}/lib`);

async function createUrl(req, res) {
  try {
    const createdUrls = await new Urls().createUrl(req.body);
    res.status(200).json(createdUrls);
  } catch (error) {
    // TODO: ERROR HANLDER
    res.status(400).json({ error: true, message: 'Create Url' });
  }
}

module.exports = createUrl;