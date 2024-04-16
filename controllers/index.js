// TODO: Add a comment indicating how this file fits into the MVC framework 
//TODO (is it a Model, a View, or a Controller?) and what it is responsible for handling.

// this is a controller its responsible for handling the homeroute
const router = require('express').Router();
// TODO: Add a comment describing the purpose of the get route
router.get('/', async (req, res) => { // controlling the main endpoint
//TODO: Add a comment describing the purpose of the render method
//? Use handlebars to render somthing for the client
  res.render('login');
});

module.exports = router;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
