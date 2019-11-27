const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  name: String,
  url: String,
});

module.exports = mongoose.model("menu", MenuSchema);