const router = require('express').Router();
const { Comment, Review, User } = require('../models');
const fs = require('fs');

router.get('/', async (req, res) => {
    res.render('explorareviews');
});

router.get('/reviews', (req, res) => {
    fs.readFile('seeds/reviewData.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ error: 'Error reading file' });
        }
        try {
            const reviews = JSON.parse(data);

            res.json(reviews);
        } catch (err) {
            console.error('Error parsing JSON:', err);
            res.status(500).json({ error: 'Error parsing JSON' });
        }
    });
});




module.exports = router;








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

// router.post('/search', async (req, res) => {
//     try {
//         const gameName = req.body.gameName;
//         const rating = req.body.rating;
//         const user = req.body.userl

//         // Fetch and filter reviews based on user input.
//         const reviews = await Review.findAll({
//             where: {
//                 game_title: {
//                     [Op.like]: `%${game_title}%`
//                 },
//             }
//         });
//         res.render('explorareviews', { sGameQuery: true, reviews: reviews });
//     } catch (error) {
//         console.error('Error searching reviews:', error);
//         res.status(500).json({ error: 'Internal server error'})
//     }
// });