const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const config = require("./../config");


// Login endpoint (returns JWT)
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    const payload = { username };
    const token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected route
router.get('/profile', verifyToken, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}` });
});

// Middleware to verify token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (bearerHeader) {
    const token = bearerHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(403).json({ message: 'Invalid token' });
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).json({ message: 'Token missing' });
  }
}

module.exports = router;
