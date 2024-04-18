const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
      
      const userData = await User.create({
        avatar:req.body.formData,
      });

    } catch (err) {
      console.error(err);
      res.status(500).json({message: "hola mundo"});
    }
  });





module.exports = router;