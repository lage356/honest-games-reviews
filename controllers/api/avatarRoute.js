// const router = require("express").Router();
// const cloudinary = require("cloudinary").v2;
// const upload = require('/Users/fernandolage/bootcamp/honest-games-reviews/middleware/upload');


// router.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     const result = await cloudinary.uploader.upload(req.file.path);
//     const imageUrl = result.secure_url;

//     res.json({ imageUrl });
//     console.log(imageUrl);
//   } catch (error) {
//     console.error('Error uploading profile picture:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = router;
