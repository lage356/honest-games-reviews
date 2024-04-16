const router = require('express').Router();
const { Comment, Review, User } = require('../models');
// Next, we need to add something to Authenticate the loggin before sending routes.


router.get('/explore', async (req, res) => {
    res.render('explorareviews');
});

router.get('/reviews/:gameTitle', async (req, res) => {
    try {
        const gameTitle = req.params.gameTitle;

        const reviews = await Review.findAll({
            where: { game_title: gameTitle }
        });
        res.render('review', { reviews: reviews });
    } catch (error) {
        console.error('Error fetching reviews', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/explore', async (req, res) => {
    try {
        const searchQuery = req.query.search ||
    }
})



module.exports = router;