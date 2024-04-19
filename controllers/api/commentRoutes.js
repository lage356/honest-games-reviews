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

router.post('/comments', async (req, res)=>{
  try {
    const comentaData = await Comment.findAll({
      include: [
        {
          model: comment,
          attributes: ["content", "review_id"],
        },
      ],
    });
    const comentarios = comentaData.map((rev) => rev.get({ plain: true }));

    res.render("singleReview", {
      comentarios,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;
