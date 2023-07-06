const createHttpError = require('http-errors');
const Course = require('./courseModel');

const getCourses = async (next) => {
  try {
    const courses = await Course.find().lean();
    return courses;
  } catch (err) {
    next(err);
  }
};

const getCourse = async (id, next) => {
  try {
    const course = await Course.findOne({ _id: id }).lean();
    return course;
  } catch (err) {
    next(err);
  }
};

const addCourses = async (title, description, price, categories, next) => {
  try {
    const course = await Course.create({
      title, description, price, categories,
    });
    return course;
  } catch (err) {
    next(err);
  }
};

const updateCourses = async (id, updateObject, next) => {
  try {
    const course = await Course.findOneAndUpdate({ _id: id }, { $set: updateObject });
    if (!course) next(createHttpError(500, 'error while updating Course'));
    return course;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCourses,
  getCourse,
  addCourses,
  updateCourses,
};
