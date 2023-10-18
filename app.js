const createError = require('http-errors');
const cors = require('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const taskRouter = require('./routes/tasks');
const { auth, requiresAuth } = require('express-openid-connect'); // Import 'requiresAuth' correctly

// Require environment files
const dotenv = require('dotenv')
dotenv.config()

const app = express();

// Set up middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env['TOKEN_SECRET'],
  baseURL: 'http://localhost:3000',
  clientID: process.env['CLIENT_ID'],
  issuerBaseURL: process.env['ISSUER_BASE_URL']
};

// Use 'requiresAuth' middleware for protected routes
// app.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });

// Set up user authentication using 'auth' middleware
app.use(auth(config));

// Handle routes
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// Use 'cors' middleware
app.use(cors());

// Include route handlers
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tasks', taskRouter);

// Handle 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Handle errors (you can uncomment and configure this as needed)
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
