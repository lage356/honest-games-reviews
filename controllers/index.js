const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require ('./homeRoutes');
const exploreRoutes = require ('./exploreRoutes');

router.use ('/api',apiRoutes);
router.use ('/', homeRoutes);
router.use ('/explore', exploreRoutes);
module.exports = router;