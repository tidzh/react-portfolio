const express = require("express");
const router = express.Router();
const LoginController = require("../models/User")


router.post('/register', function(req, res) {
  const { email, password } = req.query;
  const user = new LoginController({ email, password });
  user.save(function(err) {
	if (err) {
	  res.status(500)
		.send("Error registering new user please try again.");
	} else {
	  res.status(200).send("Welcome to the club!");
	}
  });
});


module.exports = router;