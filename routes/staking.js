var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");
const stakingModel = require("./../models/staking");

router.get('/', authenticateToken, async(req, res)=> {
  const result = await stakingModel.getStakings();
  res.json(result);
});


router.get('/:wallet', authenticateToken, async(req, res)=> {
  const result = await stakingModel.getStaking(req.params.wallet);
  res.json(result);
});


router.post('/', authenticateToken, async(req, res)=> {
  const user = req.user;
  if(user.role != "admin") {
    res.status(403).json({status:"error", message:"Server refuses to authorize it"});
    return;
  }
  const result = await stakingModel.addStaking({...user, ...req.body});
  res.json(result);

});


router.post('/unstake', authenticateToken, async(req, res)=> {
  const { wallet } = req.user;
  const { index } = req.body;
  console.log({wallet, index})
  const result = await stakingModel.unstake({wallet, index});
  res.json(result);
});


router.post('/req-unstake', authenticateToken, async(req, res)=> {
  const { wallet } = req.user;
  const { index, tx } = req.body;
  console.log({wallet, index})
  const result = await stakingModel.reqUnstake({wallet, index});
  res.json(result);
});



router.post('/test', authenticateToken, async(req, res)=> {
  res.json({data:req.user});
});



module.exports = router;



//         {   id: 2, 
//             name:"Smart Circus", 
//             wallet:"0x328573984539847598374598374", 
//             staked_amount:12123,
//             category:"Clean Water",
//             start_date:"12 Jan 2025",
//             end_date:"12 Jan 2025",
//             duration:"90 Days",
//             voting_power:0.5,
//             status:"Stoped",  
//         },   
//         {   id: 3, 
//             name:"Smart Circus", 
//             wallet:"0x328573984539847598374598374", 
//             staked_amount:12123,
//             category:"Clean Water",
//             start_date:"12 Jan 2025",
//             end_date:"12 Jan 2025",
//             duration:"90 Days",
//             voting_power:0.5,
//             status:"Completed",  
//         },                     