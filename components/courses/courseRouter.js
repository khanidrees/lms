const jwt = require('jsonwebtoken');
const router = require('express').Router();
const { body } = require('express-validator');

const courseController = require('./courseController');
const { isAuthorized } = require('../auth/auth');
const Categories = require('../categories/categoriesModel');
require('dotenv').config();

router.get('/', isAuthorized, courseController.getCourses);

router.get('/:courseId', isAuthorized, courseController.getCourse);

router.post('/', isAuthorized, [
  body('title')
    .isString(),
  body('description')
    .isString(),
  body('price')
    .isNumeric(),

], courseController.addCourses);

router.patch('/:courseId', isAuthorized, courseController.updateCourses);

module.exports = router;
