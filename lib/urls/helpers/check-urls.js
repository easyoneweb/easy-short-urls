const DB = require(`${__basedir}/lib/db`);

async function checkUrls(arrayOfUrls) {
  let newUrls = [];
  let existingUrls = [];

  const length = arrayOfUrls.length;
  for (let i = 0; i < length; i++) {
    const foundUrl = await new DB().urls.getUrl({ url: arrayOfUrls[i].url });

    if (foundUrl) existingUrls.push(foundUrl);
    if (!foundUrl) newUrls.push(arrayOfUrls[i]);
  }

  return {
    newUrls,
    existingUrls
  }
}

module.exports = checkUrls;