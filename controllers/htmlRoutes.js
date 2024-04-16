const router = require('express').Router();

router.get('/', async (req, res) => { // controlling the main endpoint

    res.render('login');
  });

  module.exports = router;