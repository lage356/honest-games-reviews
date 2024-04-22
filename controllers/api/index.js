const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const avatarRoute = require('./avatarRoute')
const reviewsRoutes = require('./newReviewApiRoute');


router.use('/users', userRoutes);
router.use('/comments',commentRoutes);
// router.use('/avatar',avatarRoute);
router.use('/reviews', reviewsRoutes);

module.exports = router;
