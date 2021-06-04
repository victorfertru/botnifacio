const userRepository = require("../repositories/userRepository");
const { insertUserSchema } = require("../validations/userValidation");
const encryptPassword = require("../utils/encryptPassword");

exports.signup = async (user) => {
  const validationData = await insertUserSchema.validateAsync(user);
  validationData.password = await encryptPassword(validationData.password);

  await userRepository.createUser(validationData);
};
