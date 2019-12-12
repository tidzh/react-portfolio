const express = require("express");
const router = express.Router();
const MenuController = require("../models/Menu")

router.get("/menu", (req, res)=>{
  MenuController.find({})
	.then(menu => {
	  res.send(menu);
	});
});

router.post("/menu", (req, res)=>{
  MenuController.create(req.body)
	.then(menu => {
	  res.send(menu);
	});
});

router.put("/menu/:id", (req, res)=>{
  MenuController.findByIdAndUpdate({_id: req.params.id}, req.body)
	.then(() => {
	  MenuController.findOne({_id: req.params.id})
		.then(menu => {
		  res.send(menu);
		});
	});
});

router.delete("/menu/:id", (req, res)=>{
  MenuController.deleteOne({_id: req.params.id})
	.then(menu => {
	  res.send(menu);
	});
});

module.exports = router;