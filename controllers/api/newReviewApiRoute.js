const express = require('express');
const Review = require('../../models/Review');
const router = express.Router();



// POST route to handle new review submissions
router.post('/', async (req, res) => {
    try {
        // Parse data from the request body
        const { game_title, content, rating } = req.body;

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

// Delete route to delete a selected review by its id.
router.delete('/:id', async (req, res) => {
    try {
        // Extract the review id from the request parameters
        const { id } = req.params;

        // Find the review by id
        const review = await Review.findByPk(id);

        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        // Delete the review
        await review.destroy();

        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = router;