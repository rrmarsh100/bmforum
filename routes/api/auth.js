const express = require("express");
const router = express.Router();

// @route GET api/auth
// @desc Tests auth route
// @access Public
router.get("/", (req, res) => res.json({ msg: "auth Works" }));

module.exports = router;
