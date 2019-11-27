const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, unique: true },
  img: String,
  text: String,
  like: Number,
  date:{ type: Date, default: Date.now }
  
});

module.exports = mongoose.model("portfolio", PortfolioSchema);