const router = require("express").Router();
const { User, Review, Comment } = require("../models");

router.get("/", async (req, res) => {
  // controlling the main endpoint
  try {
    const review = await Review.findAll({
      include: [
        {
          model: User,
          attributes: ["email", "username"],
        },
      ],
    });

    const reviews = review.map((rev) => rev.get({ plain: true }));

    res.render("home", {
      reviews,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});


router.get("/review/:id", async (req, res) => {
  try {
    const reviews = await Review.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ["content","createdAt","review_id"],
          include:[
            {
              model:User,
              attributes:["username"],
            }
          ],
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const review = reviews.get({ plain: true });
    

    const comments =review.comments.map(comment =>({
      content: comment.content,
      username:comment.user.username,
      createdAt:comment.createdAt,
      review_id:comment.review_id
    }));


    console.log(comments)

    res.render("singleReview", {
      review,
      comments,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/review", (req, res) => {
  // If the user is already logged in, redirect the request to another route

  res.render("review", {
    logged_in: req.session.logged_in,
  });
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
