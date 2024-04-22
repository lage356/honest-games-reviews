const router = require("express").Router();
const cloudinary = require("cloudinary").v2;
const upload = require("../../middleware/upload");
const Avatar = require("../../models/Avatar");

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const result = await cloudinary.uploader.upload(req.file.path);
    const imageUrl = result.secure_url;
    if (!req.session.user_id) {
      return res.status(401).json({ message: "User not authenticated" });
    }
    const userId = req.session.user_id;
    const newAvatar = await Avatar.create({
      name_file: req.file.originalname,
      url_file: imageUrl,
      user_id: userId,
      avatar_id: userId,
    });
    res.json({ imageUrl });
    console.log(imageUrl);
  } catch (error) {
    console.error("Error uploading profile picture:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/list", async (req, res) => {
  try {
    const avatars = await Avatar.findAll();
    const imageInfo = avatars.map((avatar) => ({
      id: avatar.id,
      url: avatar.url_file,
    }));
    res.json({ images: imageInfo });
  } catch (error) {
    console.error("Error fetching uploaded images:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
