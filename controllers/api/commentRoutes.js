const router = require("express").Router();
const { Review, Comment } = require("../../models");

router.post("/", async (req, res) => {
  try {
    // Create the comment with the user_id, review_id, and content
    const commentData = await Comment.create({
      ...req.body,  
      user_id: req.session.user_id,
    });

    res.status(200).json(commentData);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Wrong info" });
  }
});

module.exports = router;
