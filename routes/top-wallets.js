var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");


router.get('/', authenticateToken, function(req, res, next) {

  res.json(
      [
        { id: 1, address: "0xd7f2cg...j7H8k9L", volume: "$120,550", winnings: "$15,230" },
        { id: 2, address: "0xa1b2c3...d4e5f6", volume: "$110,000", winnings: "$12,345" },
        { id: 3, address: "0x9876ab...cd3210", volume: "$95,750", winnings: "$10,500" },
      ]
  );
});

module.exports = router;




// [
//     { id: 1, address: "0xd7f2cg...j7H8k9L", volume: "$120,550", winnings: "$15,230" },
//     { id: 2, address: "0xa1b2c3...d4e5f6", volume: "$110,000", winnings: "$12,345" },
//     { id: 3, address: "0x9876ab...cd3210", volume: "$95,750", winnings: "$10,500" },
//   ]