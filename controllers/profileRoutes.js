const router = require("express").Router();
const cloudinary = require("cloudinary").v2;

router.get("/", async (req, res) => {
  res.render("profile", {
    logged_in: req.session.logged_in,
  });
  
});

module.exports = router;
