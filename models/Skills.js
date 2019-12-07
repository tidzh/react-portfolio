const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  name: String,
  url: String,
});

module.exports = mongoose.model("skill", SkillSchema);