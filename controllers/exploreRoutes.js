const router = require('express').Router();
const { Comment, Review, User } = require('../models');
// Next, we need to add something to Authenticate the loggin before sending routes.


router.get('/', async (req, res) => {
    res.render('explorareviews');
});

// router.get('/reviews/:gameTitle', async (req, res) => {
//     try {
//         const gameTitle = req.params.gameTitle;

//         const reviews = await Review.findAll({
//             where: { game_title: gameTitle }
//         });
//         res.render('review', { reviews: reviews });
//     } catch (error) {
//         console.error('Error fetching reviews', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

router.get('/search', async (req, res) => {
    try {
        const searchQuery = req.query.search || ''; // Retrives the search query from the request parameters.

        // Query the database for reviews that match the game title.
        const reviews = await Review.findAll({
            where: {
                game_title: {
                    [Op.like]: `%${searchQuery}%` // % Symbol = wildcard before and after the searchQuery.
                }
            }
        });

        res.render('explore', { reviews: reviews });
    } catch (error) {
        console.error('Error searching reviews:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = router;