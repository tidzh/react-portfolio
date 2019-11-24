const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, unique: true },
  img: String,
  text: String,
  like: Number,
  date:{ type: Date, default: Date.now }
  
});

const Portfolio = mongoose.model("portfolio", PortfolioSchema);

module.exports = Portfolio;