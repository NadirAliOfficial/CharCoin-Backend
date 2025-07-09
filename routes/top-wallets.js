var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");
const topTierWalletModel = require("./../models/topTierWallet");


router.get('/', authenticateToken, async function(req, res) {
    const lottries = await topTierWalletModel.getTopWallets(10);
  res.json(lottries);
});


router.get('/:id', authenticateToken, async function(req, res) {
    const causes = await topTierWalletModel.getTopWallet(req.params.id);
  res.json(causes);
});


router.post('/', authenticateToken, async function(req, res) {
    const user = req.user;
    if(user.role != "admin") {
      res.status(403).json({status:"error", message:"Server refuses to authorize it"});
      return;
    }  
    const result = await topTierWalletModel.addTopWallet({...user, ...req.body});
  res.json(result);
});

module.exports = router;




