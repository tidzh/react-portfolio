const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
  title: Number,
  img: String,
  text: String,
  status: String,
  date:{ type: Date, default: Date.now }
  
});

const Portfolio = mongoose.model("portfolio", PortfolioSchema);

module.exports = Portfolio;