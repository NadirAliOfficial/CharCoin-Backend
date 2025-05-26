var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");


router.get('/', authenticateToken, function(req, res, next) {

  res.json(
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
  );
});

module.exports = router;