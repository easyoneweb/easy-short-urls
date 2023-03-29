const router = require('express').Router();
const { urls } = require('./controllers');

router.get('/:shortId', urls.shortUrlRedirect);

router.get('*', (req, res) => res.status(404).send('404 - Page Not Found'));

module.exports = router;