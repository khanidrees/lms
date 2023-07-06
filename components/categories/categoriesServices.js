const createHttpError = require('http-errors');
const Categories = require('./categoriesModel');

async function addCategories(title, next) {
  try {
    const category = await Categories.create({
      title,
    });
    console.log('category', category);
    return category;
  } catch (error) {
    next(createHttpError());
  }
}

module.exports = {
  addCategories,
};
