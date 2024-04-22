const { Model } = require("sequelize");
const { Comment } = require("../models");
const router = require("express").Router();

// Define route handler for fetching all comments
router.get('/', async (req, res) => {
    try {
      // Query the database for all comments
      const comments = await Comment.findAll();
  
      // If there are no comments found
      if (comments.length === 0) {
        return res.status(404).json({ message: 'No comments found' });
      }
  
      // If comments are found, send them as a response
      res.status(200).json(comments);
    } catch (error) {
      // If there's any error, send a 500 status code along with the error message
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  });
  
  // Delete route to delete a selected comment by its id.
router.delete('/:id', async (req, res) => {
    try {
        // Extract the comment id from the request parameters
        const { id } = req.params;

        // Find the comment by id
        const comment = await Comment.findByPk(id);

        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        // Delete the comment
        await comment.destroy();

        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        console.error('Error deleting Comment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

  // Export the router
  module.exports = router;