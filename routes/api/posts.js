const express = require("express");
const router = express.Router();

// @route GET api/posts
// @desc Tests posts route
// @access Public
router.get("/", (req, res) => res.json({ msg: "Posts Works" }));

module.exports = router;
