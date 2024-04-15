const router = require('express').Router();
const { Comment, Review, User } = require('../models');
// Next, we need to add something to Authenticate the loggin before sending routes.

router.get('/', async (req, res) => {
    res.render('login');
});

module.exports = router;

router.get('/explore', async (req, res) => {
    res.render('explorareviews');
});