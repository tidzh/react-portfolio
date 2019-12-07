const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema({
  name: String,
  url: String,
});

module.exports = mongoose.model("service", ServicesSchema);