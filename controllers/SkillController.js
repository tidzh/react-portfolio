const express = require("express");
const router = express.Router();
const SkillsController = require("../models/Skills")

router.get("/skills", (req, res)=>{
  SkillsController.find({})
	.then(skills => {
	  res.send(skills);
	});
});


module.exports = router;