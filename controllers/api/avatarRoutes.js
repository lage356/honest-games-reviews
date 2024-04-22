const router = require("express").Router();
const cloudinary = require("cloudinary").v2;
const upload = require('../../middleware/upload');
const Avatar = require('../../models/Avatar');

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const result = await cloudinary.uploader.upload(req.file.path);
    const imageUrl = result.secure_url;

    // Obtén el ID del usuario de la sesión
    const userId = req.session.userId;

    // Crea una nueva instancia de Avatar y guarda la URL y el ID del usuario en la base de datos
    const newAvatar = await Avatar.create({ name_file: req.file.originalname, url_file: imageUrl, user_id: userId });

    res.json({ imageUrl });
    console.log(imageUrl);
  } catch (error) {
    console.error('Error uploading profile picture:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
