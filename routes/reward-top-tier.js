var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");


router.get('/', authenticateToken, function(req, res, next) {

  res.json(
      [
        { position: 1, name:"Smart Circus", address: "0xd7f2cg...j7H8k9L",  transactions:34, amount: "$120,550", registration:"12 Jan 2025", last_transaction_date:"23 Feb 2025", potential_winning: "$15,230" },
        { position: 2, name:"Tracker Logus", address: "0xa1b2c3...d4e5f6", transactions:22, amount: "$110,000", registration:"12 Jan 2025", last_transaction_date:"23 Feb 2025", potential_winning: "$12,345" },
        { position: 3, name:"Red Bohamos", address: "0x9876ab...cd3210", transactions:27, amount: "$95,750", registration:"12 Jan 2025", last_transaction_date:"23 Feb 2025", potential_winning: "$10,500" },
      ]
  );
});

module.exports = router;