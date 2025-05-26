var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");

router.get('/', authenticateToken, function(req, res, next) {

  res.json([
        { 
            id: 1, heading: "Clean water in Guatemalas most affected community", 
             category: "Water",
             orgniaztion: "Some Org",
             winning: "$12123",
             position: "1",
             start_date: "12 Mar 2023",
             end_date: "27 Mar 2023",
             benefactors: "272023",
             points: "272",
             image: "/uploads/images/water.png",
        },
            { 
            id: 1, heading: "Clean water in Guatemalas most affected community", 
             category: "Water",
             orgniaztion: "Some Org",
             winning: "$12123",
             position: "1",
             start_date: "12 Mar 2023",
             end_date: "27 Mar 2023",
             benefactors: "272023",
             points: "272",
             image: "/uploads/images/water.png",
        },
        { 
            id: 1, heading: "Clean water in Guatemalas most affected community", 
             category: "Water",
             orgniaztion: "Some Org",
             winning: "$12123",
             position: "1",
             start_date: "12 Mar 2023",
             end_date: "27 Mar 2023",
             benefactors: "272023",
             points: "272",
             image: "/uploads/images/water.png",
        },        
    ]);
});

module.exports = router;




