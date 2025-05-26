var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");


router.get('/', authenticateToken, function(req, res, next) {

  res.json(
      [
        {   id: 1, 
            image:"./images/cat.png",
            name:"Smart Circus", 
            wallet: "0xd7f2cg...j7H8k9L",  
            hash:"379853745983759837598374598374",
            status:"Awarded", 
            type: "Compaign Winner", 
            date:"12 Jan 2025", 
            previewLink:"https://localhost:3000/nft/1", 
        },
        {   id: 2, 
            image:"./images/cat.png",
            name:"Smart Circus", 
            wallet: "0xd7f2cg...j7H8k9L",  
            hash:"379853745983759837598374598374",
            status:"Awarded", 
            type: "Compaign Winner", 
            date:"12 Jan 2025", 
            previewLink:"https://localhost:3000/nft/2", 
        },
        {   id: 3, 
            image:"./images/cat.png",
            name:"Smart Circus", 
            wallet: "0xd7f2cg...j7H8k9L",  
            hash:"379853745983759837598374598374",
            status:"Awarded", 
            type: "Compaign Winner", 
            date:"12 Jan 2025", 
            previewLink:"https://localhost:3000/nft/3", 
        },      
      ]
  );
});

module.exports = router;