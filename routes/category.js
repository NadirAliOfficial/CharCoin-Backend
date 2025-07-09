var express = require('express');
var router = express.Router();
const authenticateToken = require("../middlewares/auth");
const upload = require('../middlewares/upload');

const categoriesModel = require("../models/categories");


router.get('/', async function(req, res) {
  const list = await categoriesModel.getCategories();
  res.json(list);
});


router.get('/:id',  authenticateToken,  async function(req, res) {
  const category = await categoriesModel.getCategory(req.params.id);
  res.json(category);
});


router.post('/', authenticateToken, upload.single('image'), async function(req, res) {
  const user = req?.user;
  if(user?.role != "admin") {
    res.status(403).json({status:"error", message:"Server refuses to authorize it"});
    return;
  }  
    // File check
  if (!req.file) {
    return res.status(400).json({ status: "error", message: "Image file is required" });
  }
  const file= req.file

  const result = await categoriesModel.addCategory({...user, ...req.body,file});
  res.json(result);
});

module.exports = router;
