var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");


router.get('/', authenticateToken, function(req, res, next) {

  res.json(
      [
        {   position: 1, 
            name:"Smart Circus", 
            wallet: "0xd7f2cg...j7H8k9L",  
            hash:"379853745983759837598374598374",
            transactions:37, 
            amount: "$120,550", 
            registration:"12 Jan 2025", 
            last_transaction_date:"23 Feb 2025", 
            awarded: "$15,230" 
        },
        {   position: 2, 
            name:"RedBamahas", 
            wallet: "0xd7f2cg...j7H8k9L",  
            hash:"379853745983759837598374598374",
            transactions:14, 
            amount: "$120,550", 
            registration:"12 Jan 2025", 
            last_transaction_date:"23 Feb 2025", 
            awarded: "$15,230" 
        },
        {   position: 3, 
            name:"GreatLauncher22", 
            wallet: "0xd7f2cg...j7H8k9L",  
            hash:"379853745983759837598374598374",
            transactions:86, 
            amount: "$120,550", 
            registration:"12 Jan 2025", 
            last_transaction_date:"23 Feb 2025", 
            awarded: "$15,230" 
        }        
      ]
  );
});

module.exports = router;