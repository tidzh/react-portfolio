const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  name: String,
  url: String,
});

const Menu = mongoose.model("menu", MenuSchema);

module.exports = Menu;