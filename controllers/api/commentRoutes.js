const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const commentData = await Comment.create(req.body, {});
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json({ message: "wrong info" });
  }
});

module.exports = router;
