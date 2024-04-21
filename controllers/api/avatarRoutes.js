const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dyoigdvdh",
  api_key: "831332363759673",
  api_secret: "uXG0Iy3RdRMJrC2COTqqS6m9PU8",
});



// Configuración de Multer para almacenar en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Ruta para subir un nuevo avatar
router.post("/", upload.single("image"), (req, res) => {
  cloudinary.uploader
    .upload_stream({ resource_type: "image" }, (error, result) => {
      if (error) {
        console.error(error);
        return res
          .status(500)
          .json({ error: "Hubo un error al subir la imagen a Cloudinary." });
      }

      const archivo = {
        nombre_archivo: req.file.originalname,
        url_archivo: result.secure_url,
      };

      // connection.query(
      //   "INSERT INTO archivos SET ?",
      //   archivo,
      //   (err, results) => {
      //     if (err) {
      //       console.error(
      //         "Error al guardar el archivo en la base de datos:",
      //         err
      //       );
      //       return res.status(500).json({
      //         error: "Hubo un error al guardar el archivo en la base de datos.",
      //       });
      //     }
      //     console.log("Archivo guardado en la base de datos:", results);

      //     res.json({ imageUrl: result.secure_url });
      //   }
      // );
    })
    .end(req.file.buffer);
});


module.exports = router;
