const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const avatarRoute = require('./avatarRoute')


router.use('/users', userRoutes);
router.use('/comments',commentRoutes);
router.use('/avatar',avatarRoute)

module.exports = router;
