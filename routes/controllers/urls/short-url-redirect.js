const { Urls } = require(`${__basedir}/lib`);

async function shortUrlRedirect(req, res) {
  const { shortId } = req.params;

  let foundUrl;

  try {
    foundUrl = await new Urls().getUrl({ shortUrl: `${__config.host}/${shortId}` });
  } catch (error) {
    console.log(error);
    return res.status(400).send('400 - Error Occured');
  }

  if (!foundUrl) return res.redirect('/');

  res.status(301).redirect(foundUrl.url);
}

module.exports = shortUrlRedirect;