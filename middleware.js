const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';

const withAuth = function(req, res, next) {
  const token =
	req.body.token ||
	req.query.token ||
	req.headers['x-access-token'] ||
	req.cookies.token;
  
  if (!token) {
	res.status(200).send({message:'Unauthorized: No token provided', resultCode:false});
  } else {
	jwt.verify(token, secret, function(err, decoded) {
	  if (err) {
		res.status(200).send({message:'Unauthorized: Invalid token', resultCode:false});
	  } else {
		req.email = decoded.email;
		next();
	  }
	});
  }
}

module.exports = withAuth;