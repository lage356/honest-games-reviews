const express = require('express');
const router = express.Router();
const { Review, User } = require('../../models');


// Route to fetch reviews based on game title
router.get('/', async (req, res) => {
    try {
      const { game_title } = req.query;
  
      // Query the database for reviews with the specified game title
      const reviews = await Review.find({ game_title });
  
      // Send the reviews as a JSON response
      res.json(reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


module.exports = router;