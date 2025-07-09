var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");
const causesModel = require("./../models/causes");
const newsModel = require("./../models/news");

router.get('/', authenticateToken, async function(req, res) {
  //const news = await newsModel.getNews();
  const user = req.user;
  const dashboardData = {
        recentUp:13.2, 
        recentDonation:423, 
        marketValue:0.00023, 
        globalDonation:4456, 
        tokenBalance:77678, 
        usdBalance:233, 
        myTotalStaked:7123, 
        causesSupported:8, 
        totalVolume:9434545, 
        totalTransactions:19, 
        canVoteAmount:33, 
        canWithdrawAmount:33,
        donatedSoFar:17678,
        causesSupported:7,
        projectsSupported:15,
        winningCause:{title:"Clear Water for All children in Africa", points:11, image:"/images/winning-cause.png"}, 
        nextNft:{ address:"8zLpXNcYHkPtE6jZmJX2G7K9PqfW3VtLZdYMQT987DWHH", title:"The NFT will be randomly awarded to one of the currently staking wallets.", releaseDate:"12 June 2025",  image:"/images/current-nft.png"}, 
        lastNft:{ address:"8zLpXNcYHkPtE6jZmJX2G7K9PqfW3VtLZdYMQT987DWHH", title:"The NFT will be randomly awarded to one of the currently staking wallets.", releaseDate:"12 June 2025",  image:"/images/prev-nft.png"}, 
        totalStaked:1247398,
        user:{
          name:user.name,
          username:user.username,
          wallet:user.wallet,
          joining_date:"2025-06-16"
        }
    }
  res.json(dashboardData);
});


router.get('/:id',  authenticateToken,  async function(req, res) {
  const causes = await causesModel.getCause(req.params.id);
  res.json(causes);
});


router.post('/', authenticateToken, async function(req, res) {
    const user = req.user;
    if(user.role != "admin") {
      res.status(403).json({status:"error", message:"Server refuses to authorize it"});
      return;
    }  
    const result = await causesModel.addCause({...user, ...req.body});
  res.json(result);
});

module.exports = router;