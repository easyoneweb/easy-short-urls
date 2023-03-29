const router = require('express').Router();
const { urls } = require('./controllers');

router.get('/urls', urls.getUrls);
router.post('/urls', urls.getUrlsByQuery);
router.post('/url', urls.getUrl);
router.post('/url/create', urls.createUrl);

module.exports = router;