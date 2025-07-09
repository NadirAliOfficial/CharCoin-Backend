var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");
const charityLotteryModel = require("./../models/charityLottery");


router.get('/', authenticateToken, async function(req, res) {
    const lottries = await charityLotteryModel.getLotteries();
  res.json(lottries);
});


router.get('/:id', authenticateToken, async function(req, res) {
    const causes = await charityLotteryModel.getLottery(req.params.id);
  res.json(causes);
});


router.post('/', authenticateToken, async function(req, res) {
    const user = req.user;
    if(user.role != "admin") {
      res.status(403).json({status:"error", message:"Server refuses to authorize it"});
      return;
    }  
    const result = await charityLotteryModel.addLottery({...user, ...req.body});
  res.json(result);
});

module.exports = router;




