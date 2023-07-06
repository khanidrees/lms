const { validationResult } = require('express-validator');
const categoriesService = require('./categoriesServices');

const addCategories = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const {
    title,
  } = req.body;
  try {
    const category = await categoriesService.addCategories(title, next);
    if (category) {
      return category;
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addCategories,
};
