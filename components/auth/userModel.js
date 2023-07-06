const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      select: false, // No select
    },
    mobileNumber: { type: Number, require: true },
    password: {
      type: String,
      required: true,
      trim: true,
      select: false, // No select
    },
    roles: {
      type: [{
        type: String,
        enum: ['student', 'admin', 'teacher'],
        require: true,
      }],
      default: ['student'],
    },
    cousrses: [
      {
        type: Schema.Types.ObjectId, ref: 'Course',
      },
    ],

  },
  {
    timestamps: true,
  },
);
const User = mongoose.model('User', userSchema);

module.exports = User;
