const express = require("express");
const router = express.Router();
const LoginController = require("../models/User");
const jwt = require('jsonwebtoken');
const withAuth = require('../middleware');

const secret = 'mysecretsshhh';

router.post('/auth', function(req, res) {
  const { email, password } = req.body;
  console.log(email, password)
  
  LoginController.findOne({ email }, function(err, user) {
	if (err) {
	  res.status(500)
		.json({
		  error: 'Internal error please try again'
		});
	} else if (!user) {
	  res.status(401)
		.json({
		  error: 'Incorrect email or password'
		});
	} else {
	  user.isCorrectPassword(password, function(err, same) {
		if (err) {
		  res.status(500)
			.json({
			  error: 'Internal error please try again'
			});
		} else if (!same) {
		  res.status(401)
			.json({
			  error: 'Incorrect email or password'
			});
		} else {
		  // Issue token
		  const payload = { email };
		  const token = jwt.sign(payload, secret, {
			expiresIn: '1h'
		  });
		  res.cookie('token', token, { httpOnly: true })
			.sendStatus(200);
		}
	  });
	}
  });
});
router.get('/secret', withAuth, function(req, res) {
  res.send('The password is potato');
});
router.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});
module.exports = router;