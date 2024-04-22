const express = require('express');
const Review = require('../../models/Review');
const router = express.Router();
const withAuth = require("../../utils/auth.js");



// POST route to handle new review submissions
router.post('/', withAuth, async (req, res) => {
    try {
        const userID = req.session.user_id;
        // Parse data from the request body
        const { game_title, content, rating } = req.body;

        const newReview = await Review.create({
            game_title,
            content,
            rating,
            user_id: userID
        });

        // Respond with the created review
        res.status(201).json(newReview);
    } catch (error) {
        console.error('Error submitting review:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete route to delete a selected review by its id.
router.delete('/:id', withAuth, async (req, res) => {
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

router.get('/',withAuth, async (req, res) => {
    try {
        // Fetch all reviews from the database
        const reviews = await Review.findAll();

        // Respond with the fetched reviews
        res.status(200).json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = router;