const express = require("express");
const router = express.Router();
const Portfolio = require("../models/Portfolio")


router.get("/portfolios", (req, res)=>{
  let pageOptions = {
	page: Number(req.query.page) || 1,
	limit: Number(req.query.limit) || 8
  }
  Portfolio.count({}, (err,count) => {
	Portfolio.find({})
	  .skip((pageOptions.limit * pageOptions.page) - pageOptions.limit)
	  .limit(pageOptions.limit)
	  .then(portfolio => {
		res.send({items: portfolio, totalCount: count});
	  });
  })
});
router.get("/portfolio/:url", (req, res)=>{
  Portfolio.findOne({url: req.params.url})
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