const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { isHttpError } = require('http-errors');

const { connectToDatabase } = require('./db/connect');

const userRouter = require('./components/auth/userRouter');
const courseRouter = require('./components/courses/courseRouter');
const categoriesRouter = require('./components/categories/categoriesRouter');

const app = express();

connectToDatabase();

// for security
app.use(helmet());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/courses', courseRouter);
app.use('/categories', categoriesRouter);

app.use('/', (req, res) => res.json({ hi: 'dkjsdk' }));

app.use((err, req, res, next) => {
  let statusCode = 500;
  let errorMessage = 'Something broke!';
  console.log('err', JSON.stringify(err));
  if (isHttpError(err)) {
    statusCode = err.statusCode;
    errorMessage = err.message;
  }
  return res.status(statusCode).json({
    status: 'failed',
    errors: errorMessage,
  });
});

module.exports = app;
