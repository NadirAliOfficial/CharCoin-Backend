var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");
const newsModel = require("./../models/news");

router.get('/', authenticateToken, async function(req, res) {
  const news = await newsModel.getNews();
  console.log(news);
  res.json(news);
});


router.get('/latest',  authenticateToken,  async function(req, res) {
  const news = await newsModel.getLatest(req?.query?.limit || 1);
  res.json(news);
});


router.get('/:id',  authenticateToken,  async function(req, res) {
  const news = await newsModel.getNew(req.params.id);
  res.json(news);
});



router.post('/', authenticateToken, async function(req, res) {
    const user = req?.user;
    if(user?.role != "admin") {
      res.status(403).json({status:"error", message:"Server refuses to authorize it"});
      return;
    }  
    const result = await newsModel.addNew({...user, ...req.body});
  res.json(result);
});

module.exports = router;







/*

[
        {   id: 1, 
            video:"feature-image.png", 
            heading:"GLOBAL EMERGENCIES", 
            shortDescription:"CHAR Coin donates $145,000 to Chilean earthquake victims", 
            status: "published",  
            category:"Clean Water",
            posted_on:"12 Jan 2025",
            views:343 
        },   
        {   id: 2, 
            video:"feature-image.png", 
            heading:"ANNOUNCEMENTS", 
            shortDescription:"Community Update: Q1 2024 Highlights", 
            status: "published",  
            category:"Clean Water",
            posted_on:"12 Jan 2025", 
            views:34
        },  
        {   id: 3, 
            video:"http://localhost:3000/32874289/", 
            heading:"PARTNERSHIPS", 
            shortDescription:"New Partnership Announcement", 
            status: "published",  
            category:"Clean Water",
            posted_on:"12 Jan 2025", 
            views:435
        },                   
      ]

*/