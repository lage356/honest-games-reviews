const router = require("express").Router();
const { Comment } = require('../../models');

router.post("/", async (req, res) => {
  try {
 
    const commentData = await Comment.create({
      
      content:req.body.content,
      review_id:req.session.user_id,

    });
    res.status(200).json(commentData);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "wrong info" });
  }
});



module.exports = router;
