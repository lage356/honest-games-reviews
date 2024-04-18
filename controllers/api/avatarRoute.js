const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    // try {
      
    //   const userData = await User.create({
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password,
    //   });

    // } catch (err) {
    //   console.error(err);
    //   res.status(500).json({message: "hola mundo"});
    // }
  });





module.exports = router;