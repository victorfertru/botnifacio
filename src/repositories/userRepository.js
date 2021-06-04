const User = require("../models/User");

exports.findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

exports.createUser = async (user) => {
  return await User.create(user);
};
