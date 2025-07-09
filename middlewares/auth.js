const jwt = require('jsonwebtoken');
const config = require("./../config");

function authenticateToken(req, res, next) 
{
  const token = req.cookies.accessToken;
  console.log({token});
  
  if (!token) return res.status(401).json({status:"error", message: 'Access Denied. No token provided.' });
  
  jwt.verify(token, config.JWT_SECRET, (err, user) => 
  {
      if (err) return res.status(403).json({status:"error", message: 'Invalid token.' });
      req.user = user;
      next();
  });
}

module.exports = authenticateToken;