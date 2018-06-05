const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AuthSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = Auth = mongoose.model("auth", AuthSchema);
