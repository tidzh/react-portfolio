const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  text: { type: String, required: true },
  status:{ type: Boolean, required: true }
});

module.exports = mongoose.model("feedback", FeedbackSchema);