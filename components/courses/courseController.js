const { validationResult } = require('express-validator');
const courseService = require('./courseService');

const getCourses = async (req, res, next) => {
  try {
    const courses = await courseService.getCourses(next);
    res.json({ courses });
  } catch (err) {
    next(err);
  }
};

const getCourse = async (req, res, next) => {
  const { courseId } = req.params;
  try {
    const course = await courseService.getCourse(courseId, next);
    res.json({ course });
  } catch (err) {
    next(err);
  }
};

const addCourses = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(errors);
  }
  const {
    title, description, price, categories,
  } = req.body;
  try {
    const courses = await courseService.addCourses(title, description, price, categories, next);
    res.json({ courses });
  } catch (err) {
    next(err);
  }
};

const updateCourses = async (req, res, next) => {
  const updateObject = req.body;
  const { id } = req.params;
  try {
    const course = await courseService.updateCourses(id, updateObject, next);
    res.json({
      message: 'course updated.',
      course,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCourses,
  getCourse,
  addCourses,
  updateCourses,
};
