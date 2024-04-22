const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require ('./homeRoutes');
const profileRoute = require('./profileRoute');
const commentAll = require('./commentAll');

router.use ('/api',apiRoutes);
router.use ('/', homeRoutes);
router.use ('/profile',profileRoute);
router.use ('/comments', commentAll)

module.exports = router;
