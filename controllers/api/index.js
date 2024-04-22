const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const avatarRoutes = require('./avatarRoutes')
const reviewsRoutes = require('./newReviewApiRoute');


router.use('/users', userRoutes);
router.use('/comments',commentRoutes);
router.use('/avatars',avatarRoutes);
router.use('/reviews', reviewsRoutes);

module.exports = router;
