const router = require("express").Router();
const { Comment } = require('../../models');

router.post("/", async (req, res) => {
  try {
 
    const {review_id, comment} =req.body
    const commentData = await Comment.create({
      review_id,
      comment 

    });
    res.status(200).json(commentData);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "wrong info" });
  }
});

module.exports = router;
