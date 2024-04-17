const router = require('express').Router();
const { Comment, Review, User } = require('../models');
// Next, we need to add something to Authenticate the loggin before sending routes.

// router.get('/search', async (req, res) => {
//     try {
//         const searchQuery = req.query.search || ''; // Retrives the search query from the request parameters.

//         // Query the database for reviews that match the game title.
//         const reviews = await Review.findAll({
//             where: {
//                 game_title: {
//                     [Op.like]: `%${searchQuery}%` // % Symbol = wildcard before and after the searchQuery.
//                 }
//             }
//         });

//         res.render('review', { reviews: reviews });
//     } catch (error) {
//         console.error('Error searching reviews:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

router.post('/search', async (req, res) => {
    try {
        const gameName = req.body.gameName;
        const rating = req.body.rating;
        const user = req.body.userl

        // Fetch and filter reviews based on user input.
        const reviews = await Review.findAll({
            where: {
                game_title: {
                    [Op.like]: `%${game_title}%`
                },
            }
        });
        res.render('explorareviews', { sGameQuery: true, reviews: reviews });
    } catch (error) {
        console.error('Error searching reviews:', error);
        res.status(500).json({ error: 'Internal server error'})
    }
});

router.get('/', async (req, res) => {
    res.render('explorareviews', { sGameQuery: false });
});




module.exports = router;