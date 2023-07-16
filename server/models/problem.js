const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
  pid: { type: Number, required: true },
  qno: { type: Number, required: true },
  sub: { type: String, required: true },
  ques: { type: String, required: true },
  testcase: { type: String, required: true },
});
module.exports = mongoose.model("testcassdfe", dataSchema);
