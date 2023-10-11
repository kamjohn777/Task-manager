const createError = require('http-errors');
const cors = require('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const taskRouter = require('./routes/tasks');
const { auth } = require('express-openid-connect');
//require env files
const dotenv = require('dotenv')
dotenv.config()
// require('dotenv').config()






const app = express(); // Define the app object here


// app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// User Authentication Section

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('jade').renderFile);
app.set('view engine', 'jade');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env['TOKEN_SECRET'],
  baseURL: 'http://localhost:3000',
  clientID: process.env['CLIENT_ID'],
  issuerBaseURL: process.env['ISSUER_BASE_URL']
};

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));



// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

//  End of User Authentication Section

// var app = express();
app.use(cors());


// view engine setup


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tasks', taskRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
