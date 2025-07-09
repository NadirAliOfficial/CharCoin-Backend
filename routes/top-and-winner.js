var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");
const topTierWalletModel = require("./../models/topTierWallet");
const charityLottery = require("./../models/charityLottery");



router.get('/', authenticateToken, async function(req, res) 
{
    const topTierWallets = await topTierWalletModel.getTopWallets(10);
    const charityLotteryWinners = await charityLottery.getLotteries(10);
  res.json({topTierWallets, charityLotteryWinners});
});


router.get('/:id', authenticateToken, async function(req, res) {
    const causes = await topTierWalletModel.getTopWallet(req.params.id);
  res.json(causes);
});



module.exports = router;








