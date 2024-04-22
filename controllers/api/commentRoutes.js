// const router = require("express").Router();
// const { Review,Comment } = require('../../models');

// router.post("/", async (req, res) => {
//   try {

//     const userID = req.session.user_id;
//     // Extract user_id and review_id from the request
//     const { review_id, content } = req.body;

//     console.log(req.body);
//     // Create the comment with the user_id, review_id, and content
//     const commentData = await Comment.create({
//       user_id: userID,
//       review_id: userID,
//       content: content,
//     });

//     res.status(200).json(commentData);
//   } catch (err) {
//     console.error(err);
//     res.status(400).json({ message: "Wrong info" });
//   }
// });
//////////////////////////////////////////////////////////////////////////////////
const router = require("express").Router();
const { Review, Comment } = require('../../models');

router.post("/", async (req, res) => {
  console.log("Request body:", req.body);
  try {
    const userID = req.session.user_id;
    const { review_id, content } = req.body;

    // Validate review_id
    if (!review_id || typeof review_id !== 'number') {
      return res.status(400).json({ error: 'Invalid review_id' });
    }

    // Create the comment with the user_id, review_id, and content
    const commentData = await Comment.create({
      user_id: userID,
      review_id: review_id,
      content: content,
    });

    res.status(200).json(commentData);
  } catch (err) {
    console.error("Error creating comment:", err);
    res.status(500).json({ message: "Failed to create comment" });
  }
});



router.get('/getAllComments', async (req, res) => {
  try {
      const comments = await Comment.findAll();
      res.json(comments);
  } catch (err) {
      console.error(err); // Log the error to the console
      res.status(500).send('Server Error');
  }
});




module.exports = router;
