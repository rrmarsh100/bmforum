const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

//Load Auth Model
const Auth = require("../../models/Auth");

// @route GET api/auth
// @desc Tests auth route
// @access Public
router.get("/", (req, res) => res.json({ msg: "auth Works" }));

// @route GET api/auth/register
// @desc Register User
// @access Public

router.post("/register", (req, res) => {
  Auth.findOne({ username: req.body.username }).then(auth => {
    if (auth) {
      return res.status(400).json({ username: "Username already taken" });
    } else {
      const newAuth = new Auth({
        username: req.body.username,
        password: req.body.password
      });

      bcrypt.genSalt(5, (err, salt) => {
        bcrypt.hash(newAuth.password, salt, (err, hash) => {
          if (err) throw err;
          newAuth.password = hash;
          newAuth
            .save()
            .then(auth => res.json(auth))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
