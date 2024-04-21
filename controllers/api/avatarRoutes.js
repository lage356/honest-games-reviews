const express = require('express');
const router = express.Router();
const multer = require('multer');

const { Avatar } = require('../../models');



// Configuración de Multer para almacenar en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Ruta para subir un nuevo avatar
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.buffer);
    const newAvatar = await Avatar.create({
      name_file: req.file.originalname,
      url_file: result.secure_url
    });
    res.status(201).json({ imageUrl: result.secure_url });
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    res.status(500).json({ error: 'Hubo un error al subir la imagen.' });
  }
});


module.exports = router;
