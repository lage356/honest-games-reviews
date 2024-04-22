const router = require("express").Router();
const { Comment } = require('../../models');

router.post("/", async (req, res) => {
  try {
    // Extract user_id and review_id from the request
    const { user_id, review_id, content } = req.body;

    // Create the comment with the user_id, review_id, and content
    const commentData = await Comment.create({
      user_id: user_id,
      review_id: review_id,
      content: content,
    });

    res.status(200).json(commentData);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Wrong info" });
  }
});




module.exports = router;
