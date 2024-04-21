const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const avatarRoutes = require('./avatarRoutes')


router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/avatars', avatarRoutes);

module.exports = router;
