const router = require('express').Router();

router.get('/', async (req, res) => { // controlling the main endpoint

    res.render('login');
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

