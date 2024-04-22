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

    // Verificar si el usuario está autenticado
    if (!req.session.user_id) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    // Obtener el ID del usuario
    const userId = req.session.user_id;

    // Crear una nueva instancia de Avatar y asociarla con el usuario actual
    const newAvatar = await Avatar.create({ name_file: req.file.originalname, url_file: imageUrl, user_id: userId });

    res.json({ imageUrl });
    console.log(imageUrl);
  } catch (error) {
    console.error('Error uploading profile picture:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
