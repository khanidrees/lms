const express = require('express');

const router = express.Router();
const { body } = require('express-validator');

const categoriesController = require('./categoriesController');
const { isAuthorized } = require('../auth/auth');
const Categories = require('./categoriesModel');

router.post(
  '/',
  isAuthorized,
  [
    body('title')
      .isString()
      .custom((value) => {
        const category = Categories.find({ title: value });
        if (category) {
          return Promise.reject('Catgory already exists.');
        }
      }),
  ],
  categoriesController.addCategories
  ,
);

module.exports = router;
