var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");
const causesModel = require("./../models/causes");
const newsModel = require("./../models/news");

router.get('/', authenticateToken, async function(req, res) {
  const causes = await causesModel.getCauses();
  const news = await newsModel.getLatest(5);
  res.json({causes, news,
    cards:[
    {
      icon: "/images/heart-circle.svg",
      title: "$1,420",
      description: "Donated so far",
    },
    {
      icon: "/images/home.svg",
      title: "4",
      description: "Projects supported",
    },
    {
      icon: "/images/people-impacted.svg",
      title: "142",
      description: "People Impacted",
    },
    {
      icon: "/images/benefactors.svg",
      title: "181",
      description: "benefactors",
    },
  ],


  tabs:[  {title:"All Cuases", icon:"/images/all-causes.svg", number:11},
          {title:"Clean water", icon:"/images/water.svg", number:4},
          {title:"Educational", icon:"/images/education.svg", number:2},
          {title:"Disaster & Emergency Aid", icon:"/images/disaster.svg", number:4}],
  });



});


router.get('/:id',  authenticateToken,  async function(req, res) {
  const causes = await causesModel.getCause(req.params.id);
  res.json(causes);
});


router.post('/', authenticateToken, async function(req, res) {
    const user = req?.user;
    if(user?.role != "admin") 
    {
      res.status(403).json({status:"error", message:"Server refuses to authorize it"});
      return;
    }  

    const result = await causesModel.addCause({...user, ...req.body});
  res.json(result);
});


module.exports = router;




