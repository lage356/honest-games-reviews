const express = require('express');
const Review = require('../../models/Review');
const router = express.Router();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// POST route to handle new review submissions
router.post('/', async (req, res) => {
    try {
        // Parse data from the request body
        const { game_title, content, rating } = req.body;

        // Create a new review instance using Sequelize
        const newReview = await Review.create({
            game_title,
            content,
            rating,
        });

        // Respond with the created review
        res.status(201).json(newReview);
    } catch (error) {
        console.error('Error submitting review:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;