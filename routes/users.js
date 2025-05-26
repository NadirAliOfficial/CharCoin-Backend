var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");


router.get('/', authenticateToken, function(req, res, next) {

  res.json(
      [
        {   
            id: 1, 
            username:"SmartCircus", 
            wallet: "0xd7f2cg...j7H8k9L",  
            image:"./images/cat.png",
            transactions:34,
            balance: 345345, 
            registeration:"12 Jan 2025", 
            last_transactions:"12 Jan 2025",
            status:"A"
        },
        {   
            id: 2, 
            username:"SmartCircus", 
            wallet: "0xd7f2cg...j7H8k9L",  
            image:"./images/cat.png",
            transactions:34,
            balance: 345345, 
            registeration:"12 Jan 2025", 
            last_transactions:"12 Jan 2025",
            status:"B"
        },
        {   
            id: 3, 
            username:"SmartCircus", 
            wallet: "0xd7f2cg...j7H8k9L",  
            image:"./images/cat.png",
            transactions:34,
            balance: 345345, 
            registeration:"12 Jan 2025", 
            last_transactions:"12 Jan 2025",
            status:"A"
        },     
      ]
  );
});

module.exports = router;