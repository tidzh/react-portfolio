const express = require("express");
const router = express.Router();
const FeedbackController = require("../models/Feedback")

router.get("/feedback", (req, res)=>{
  FeedbackController.find({})
	.then(feedback => {
	  res.send(feedback);
	});
});

router.post("/feedback", (req, res)=>{
  FeedbackController.create(req.body)
	.then(feedback => {
	  res.send(feedback);
	});
});

router.put("/feedback/:id", (req, res)=>{
  FeedbackController.findByIdAndUpdate({_id: req.params.id}, req.body)
	.then(() => {
	  FeedbackController.findOne({_id: req.params.id})
		.then(feedback => {
		  res.send(feedback);
		});
	});
});

router.delete("/feedback/:id", (req, res)=>{
  FeedbackController.deleteOne({_id: req.params.id})
	.then(feedback => {
	  res.send(feedback);
	});
});

module.exports = router;