var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");

router.get('/', authenticateToken, async function(req, res) {

const myMonthImpactSummary = [
    {
      label: "Disaster & emergency aid",
      title: "Historical fire-sides in the Los Angeles, California region.",
      image: "/images/image-01.png",
      points: 21245,
      videoUrl: "https://res.cloudinary.com/dx2tjofpa/video/upload/v1739566194/Getting_diamonds_in_under_2_minutes_v6qzpo.mp4",
    },
    {
      label: "MALNUTRITION & HUNGER",
      image: "/images/image-02.png",
  
      title:
        "100,000 nutrient-rich meals provided to support 10,000 families for 10 days in East Africa.",
      points: 18208,
      videoUrl: "https://res.cloudinary.com/dx2tjofpa/video/upload/v1739566194/Getting_diamonds_in_under_2_minutes_v6qzpo.mp4",
    },
    {
      label: "Educational / Disaster & Emergency Aid",
      image: "/images/image-03.png",
  
      title:
        "Rebuilding a school and 50 homes after a hurricane in northern Peru.",
      points: 8147,
      videoUrl: "https://res.cloudinary.com/dx2tjofpa/video/upload/v1739566194/Getting_diamonds_in_under_2_minutes_v6qzpo.mp4",
    },
    {
      label: "Disaster & emergency aid",
      title: "Historical fire-sides in the Los Angeles, California region.",
      image: "/images/image-01.png",
      points: 21245,
      videoUrl: "https://res.cloudinary.com/dx2tjofpa/video/upload/v1739566194/Getting_diamonds_in_under_2_minutes_v6qzpo.mp4",
    },
    {
      label: "MALNUTRITION & HUNGER",
      image: "/images/image-02.png",
  
      title:
        "100,000 nutrient-rich meals provided to support 10,000 families for 10 days in East Africa.",
      points: 18208,
      videoUrl: "https://res.cloudinary.com/dx2tjofpa/video/upload/v1739566194/Getting_diamonds_in_under_2_minutes_v6qzpo.mp4",
    },
    {
      label: "Educational / Disaster & Emergency Aid",
      image: "/images/image-03.png",
  
      title:
        "Rebuilding a school and 50 homes after a hurricane in northern Peru.",
      points: 8147,
      videoUrl: "https://res.cloudinary.com/dx2tjofpa/video/upload/v1739566194/Getting_diamonds_in_under_2_minutes_v6qzpo.mp4",
    },
  ]

  const impactChartData =  [
    { month: "Dec", line1: 0, line2: 0, line3: 0 },
    { month: "Jan", line1: 10, line2: 12, line3: 10 },
    { month: "Feb", line1: 20, line2: 18, line3: 15 },
    { month: "Mar", line1: 30, line2: 28, line3: 25 },
    { month: "Apr", line1: 28, line2: 30, line3: 20 },
    { month: "May", line1: 40, line2: 32, line3: 28 },
    { month: "Jun", line1: 42, line2: 35, line3: 32 },
    { month: "Jul", line1: 45, line2: 40, line3: 35 },
    { month: "Aug", line1: 50, line2: 42, line3: 38 },
    { month: "Sep", line1: 48, line2: 45, line3: 40 },
    { month: "Oct", line1: 70, line2: 60, line3: 42 },
    { month: "Nov", line1: 72, line2: 61, line3: 40 },
    { month: "Dec", line1: 90, line2: 55, line3: 48 },
  ]

  const impactSummaries = [
    {
      label: "Health Contributions",
      thisMonthAmount: 371.23,
      allTimeAmount: 4600.1,
      projectCount: 4,
      color: "#37FFE8",
    },
    {
      label: "Education Fund",
      thisMonthAmount: 221.0,
      allTimeAmount: 1821.45,
      projectCount: 2,
      color: "#7337FF",
    },
    {
      label: "Emergency Relief",
      thisMonthAmount: 99.0,
      allTimeAmount: 1000.0,
      projectCount: 3,
      color: "#FF37B6",
    },
  ]

  res.json({impactSummaries, impactChartData, myMonthImpactSummary});
});


module.exports = router;