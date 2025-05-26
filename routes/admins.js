var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");


router.get('/', authenticateToken, function(req, res, next) {

  res.json(
      [
        {   
            id: 1, 
            name:"Smart Circus", 
            username:"smartcircus112233", 
            email: "test@gmail.com",  
            phone:"+9234758374",
            OTPAuthApp:"Google Authenticator",
            permissions:12, 
            registeration:"12 Jan 2025", 
            last_login:"12 Jan 2025",
        },
        {   
            id: 1, 
            name:"Smart Circus", 
            username:"smartcircus112233", 
            email: "test@gmail.com",  
            phone:"+9234758374",
            OTPAuthApp:"Google Authenticator",
            permissions:12, 
            registeration:"12 Jan 2025", 
            last_login:"12 Jan 2025",
        },
        {   
            id: 1, 
            name:"Smart Circus", 
            username:"smartcircus112233", 
            email: "test@gmail.com",  
            phone:"+9234758374",
            OTPAuthApp:"Google Authenticator",
            permissions:12, 
            registeration:"12 Jan 2025", 
            last_login:"12 Jan 2025",
        },  
      ]
  );
});

module.exports = router;