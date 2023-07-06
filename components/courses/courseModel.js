const mongoose = require('mongoose');

const { Schema } = mongoose;

const courseSchema = Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    price: {
      type: Number,
      require: true,
    },
    categories: [
      {
        type: Schema.Types.ObjectId, ref: 'Category',
      },
    ],
    lectures: [
      {

      },
    ],
    ratings: [
      {},
    ],
    created_by: {
      type: Schema.Types.ObjectId, ref: 'User',
    },
    enrolledstudents: [
      {
        type: Schema.Types.ObjectId, ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  },
);
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
