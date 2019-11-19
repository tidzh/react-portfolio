const express = require("express");
const router = express.Router();
const Portfolio = require("../models/Portfolio")

router.get("/portfolio", (req, res)=>{
  Portfolio.find({})
	.then(portfolio => {
	  res.send(portfolio);
	});
});

router.post("/portfolio", (req, res)=>{
  Portfolio.create(req.body)
	.then(portfolio => {
	  res.send(portfolio);
	});
});

router.put("/portfolio/:id", (req, res)=>{
  Portfolio.findByIdAndUpdate({_id: req.params.id}, req.body)
	.then(() => {
	  Portfolio.findOne({_id: req.params.id})
		.then(portfolio => {
		  res.send(portfolio);
		});
	});
});

router.delete("/portfolio/:id", (req, res)=>{
  Portfolio.deleteOne({_id: req.params.id})
	.then(portfolio => {
	  res.send(portfolio);
	});
});

module.exports = router;