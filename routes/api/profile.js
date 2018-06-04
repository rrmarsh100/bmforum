const express = require("express");
const router = express.Router();

// @route GET api/profile
// @desc Tests profile route
// @access Public
router.get("/", (req, res) => res.json({ msg: "profile Works" }));

module.exports = router;
