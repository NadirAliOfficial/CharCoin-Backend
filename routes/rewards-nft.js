var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");
const rewardNftModel = require("./../models/rewards-nft");

router.get('/', authenticateToken, async function(req, res) {
  const news = await rewardNftModel.getRewardsNfts();
  res.json(news);
});


router.get('/:id',  authenticateToken,  async function(req, res) {
  const news = await rewardNftModel.getRewardsNft(req.params.id);
  res.json(news);
});


router.post('/', authenticateToken, async function(req, res) {
    const user = req.user;
    if(user.role != "admin") {
      res.status(403).json({status:"error", message:"Server refuses to authorize it"});
      return;
    }  
    const result = await rewardNftModel.addNew({...user, ...req.body});
  res.json(result);
});


module.exports = router;