const router = require('express').Router();
const userRoutes = require('./userRoutes');
const exploreApi = require('./exploreApi');

router.use('/users', userRoutes);
router.use('/exploreApi', exploreApi);

module.exports = router;
