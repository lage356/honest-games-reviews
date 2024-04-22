const router = require("express").Router();
const { Review,Comment } = require('../../models');

router.post("/", async (req, res) => {
  try {

    const userID = req.session.user_id;
    // Extract user_id and review_id from the request
    const { review_id, content } = req.body;

    console.log(req.body);
    // Create the comment with the user_id, review_id, and content
    const commentData = await Comment.create({
      user_id: userID,
      review_id: userID,
      content: content,
    });

    res.status(200).json(commentData);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Wrong info" });
  }
});




module.exports = router;
