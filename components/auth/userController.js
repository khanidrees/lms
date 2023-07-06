const { validationResult } = require('express-validator');
const userService = require('./userService');

const postUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const {
    name, email, mobileNumber, role, password, confirmPassword,
  } = req.body;
  try {
    return userService.postUser(name, email, mobileNumber, password, role);
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  const {
    email, password,
  } = req.body;
  try {
    const response = await userService.loginUser(email, password, next);
    return res.json(response);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  postUser,
  loginUser,
};
