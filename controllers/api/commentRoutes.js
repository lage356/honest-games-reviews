// const router = require("express").Router();
// const { Comment } = require('../../models');

// router.post("/", async (req, res) => {
//   try {
//     // Extract user_id and review_id from the request
//     const { user_id, review_id, content } = req.body;

//     // Create the comment with the user_id, review_id, and content
//     const commentData = await Comment.create({
//       user_id: user_id,
//       review_id: review_id,
//       content: content,
//     });

//     res.status(200).json(commentData);
//   } catch (err) {
//     console.error(err);
//     res.status(400).json({ message: "Wrong info" });
//   }
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////
const router = require("express").Router();
const { Comment, User } = require('../../models');

router.post("/", async (req, res) => {
  try {
    // Extract user_id from the authenticated user
    const userId = req.User.id; // Assuming user information is stored in req.user after authentication

    // Extract review_id and content from the request body
    const { review_id, content } = req.body;

    // Create the comment with the user_id, review_id, and content
    const commentData = await Comment.create({
      user_id: userId,
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


////////////////////////////////////////////////////////////////////


module.exports = router;
