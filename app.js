var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var authRouter = require('./routes/auth');
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var adminsRouter = require('./routes/admins');
var newsRouter = require('./routes/news');
var topWalletsRouter = require('./routes/top-wallets');
var charityLotteryWinnersRouter = require('./routes/charity-lottery-winners');
var rewardTopTierRouter = require('./routes/reward-top-tier');
var causesRouter = require('./routes/causes');
var rewardCharityLotteryRouter = require('./routes/reward-charity-lottery');
var rewardsNftsRouter = require('./routes/rewards-nft');
var stakingRouter = require('./routes/staking');


var cors = require('cors')
var app = express();
 
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/admins', adminsRouter);
app.use('/api/top-tier-wallets', topWalletsRouter);
app.use('/api/charity-lottery-winners', charityLotteryWinnersRouter);
app.use('/api/reward-top-tier', rewardTopTierRouter);
app.use('/api/causes', causesRouter);
app.use('/api/reward-charity-lottery', rewardCharityLotteryRouter);
app.use('/api/rewards-nft', rewardsNftsRouter);
app.use('/api/news', newsRouter);
app.use('/api/staking', stakingRouter);


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
