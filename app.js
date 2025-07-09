var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');




var authRouter = require('./routes/auth');
var indexRouter = require('./routes/index');
var adminsRouter = require('./routes/admins');
var newsRouter = require('./routes/news');
var topWalletsRouter = require('./routes/top-wallets');
var charityLotteryWinnersRouter = require('./routes/charity-lottery-winners');
var rewardTopTierRouter = require('./routes/reward-top-tier');
var causesRouter = require('./routes/causes');
var rewardCharityLotteryRouter = require('./routes/reward-charity-lottery');
var rewardsNftsRouter = require('./routes/rewards-nft');
var stakingRouter = require('./routes/staking'); 
var categoryRouter = require('./routes/category');
var campaignRouter = require('./routes/campaign');

var dashboardRouter = require('./routes/dashboard');
var topAndWinnerRouter = require('./routes/top-and-winner');

var myImpactRouter = require('./routes/my-impact');


var cors = require('cors')
var app = express();
// app.use(cors())

app.use(cors({
  // origin: 'http://localhost:3005',
  // credentials: true
  origin: '*',
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




// ROUTERS STARTS HERE 
app.use('/', indexRouter);

app.use('/uploads/:file_name',  function(req, res) {
const fs = require('fs');
const path = require('path');
  const filePath = path.join("./", 'uploads', req.params.file_name)
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('File not found');
    }
    res.sendFile(filePath, { root: __dirname }, (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Internal Server Error');
      }
    });
  })

});
app.use('/api/auth', authRouter);
app.use('/api/admins', adminsRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/top-tier-wallets', topWalletsRouter);
app.use('/api/charity-lottery-winners', charityLotteryWinnersRouter);
app.use('/api/reward-top-tier', rewardTopTierRouter);
app.use('/api/causes', causesRouter);
app.use('/api/reward-charity-lottery', rewardCharityLotteryRouter);
app.use('/api/rewards-nft', rewardsNftsRouter);
app.use('/api/news', newsRouter);
app.use('/api/staking', stakingRouter);
app.use('/api/category', categoryRouter);
app.use('/api/campaign', campaignRouter);
app.use('/api/top-and-winner', topAndWinnerRouter);
app.use('/api/my-impact', myImpactRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
