var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");



router.get('/', authenticateToken, function(req, res, next) {

  res.json([
    { id: 1, address: "0xb4f9m...k2N7p9R", won: "$8,450" },
    { id: 2, address: "0xc3f2a1...b4d5e6", won: "$7,100" },
    { id: 3, address: "0x8765fe...dcba98", won: "$6,200" },
    ]);
});

module.exports = router;




