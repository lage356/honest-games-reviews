const express = require('express');
const Review = require('../../models');
const fs = require('fs');
const router = express.Router();

// POST route to handle new review submissions
router.post('/reviews', async (req, res) => {
    try {
        // Parse data from the request body
        const { game_title, content, rating } = req.body;

        // Create a new review instance using Sequelize
        const newReview = await Review.create({
            game_title,
            content,
            rating
        });

        // Update your reviewData.json seed file with the new review
        const reviewData = JSON.parse(fs.readFileSync('reviewData.json', 'utf8'));
        reviewData.push({
            id: newReview.id,
            game_title: newReview.game_title,
            content: newReview.content,
            rating: newReview.rating
        });
        fs.writeFileSync('reviewData.json', JSON.stringify(reviewData));

        // Respond with success message
        res.status(201).json({ message: 'Review submitted successfully' });
    } catch (error) {
        console.error('Error submitting review:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;