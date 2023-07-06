const mongoose = require('mongoose');

const { Schema } = mongoose;

const categoriesSchema = Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);
const Categories = mongoose.model('Categories', categoriesSchema);

module.exports = Categories;
