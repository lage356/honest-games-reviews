const router = require("express").Router();
const { User, Review, Comment } = require("../models");
// const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  // controlling the main endpoint
  try {
    const review = await Review.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const reviews = review.map((rev) => rev.get({ plain: true }));

    res.render("home", {
      reviews,
      // logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect("/");
  //   return;
  // }

  res.render("login");
});

module.exports = router;
