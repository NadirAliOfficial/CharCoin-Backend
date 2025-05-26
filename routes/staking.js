var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");


router.get('/', authenticateToken, function(req, res, next) {

  res.json(
      [
        {   id: 1, 
            name:"Smart Circus", 
            wallet:"0x328573984539847598374598374", 
            staked_amount:12123,
            category:"Clean Water",
            start_date:"12 Jan 2025",
            end_date:"12 Jan 2025",
            duration:"90 Days",
            voting_power:0.5,
            status:"Ative",  
        },   
        {   id: 2, 
            name:"Smart Circus", 
            wallet:"0x328573984539847598374598374", 
            staked_amount:12123,
            category:"Clean Water",
            start_date:"12 Jan 2025",
            end_date:"12 Jan 2025",
            duration:"90 Days",
            voting_power:0.5,
            status:"Stoped",  
        },   
        {   id: 3, 
            name:"Smart Circus", 
            wallet:"0x328573984539847598374598374", 
            staked_amount:12123,
            category:"Clean Water",
            start_date:"12 Jan 2025",
            end_date:"12 Jan 2025",
            duration:"90 Days",
            voting_power:0.5,
            status:"Completed",  
        },                     
      ]
  );
});

module.exports = router;