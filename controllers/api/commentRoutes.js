const router = require("express").Router();
const { Review,Comment } = require('../../models');

router.post("/", async (req, res) => {
  try {

   
    const USERID = req.session.user_id;
    const { review_id, content,user_id } = req.body;
    
    // Create the comment with the user_id, review_id, and content
    const commentData = await Comment.create({
      review_id: review_id,
      content: content,
      user_id: USERID,
    });
    console.log(commentData);

    res.status(200).json(commentData);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Wrong info" });
  }
});




module.exports = router;
