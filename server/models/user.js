const mongoose = require("mongoose");

const newSchema = mongoose.Schema({
  uid: { type: Number, required: true },
  name: { type: String, required: true },
  usn: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  imageurl: { type: String, required: false },
});

module.exports = mongoose.model("user", newSchema);
