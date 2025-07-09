var express = require('express');
var router = express.Router();
const authenticateToken = require("../middlewares/auth");
const campaignsModel = require("../models/campaigns");


router.get('/', async function(req, res) {
  const list = await campaignsModel.getCampaigns();
  res.json(list);
});


router.get('/:id',  authenticateToken,  async function(req, res) {
  const category = await campaignsModel.getCampaign(req.params.id);
  res.json(category);
});


router.post('/', authenticateToken, async function(req, res) {
  const user = req?.user;
  if(user?.role != "admin") {
    res.status(403).json({status:"error", message:"Server refuses to authorize it"});
    return;
  }  
  const result = await campaignsModel.addCampaign({...user, ...req.body});
  res.json(result);
});

module.exports = router;
