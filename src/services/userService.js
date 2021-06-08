const userRepository = require("../repositories/userRepository");
const { insertUserSchema } = require("../validations/userValidation");
const encryptPassword = require("../utils/encryptPassword");
const { signToken } = require("./jwtService");
const HttpError = require("../utils/httpError");
const { ERRORS } = require("../utils/constants");

exports.signup = async (user) => {
  const userFound = await userRepository.findUserByEmail(user.email);

  if (userFound) throw new HttpError(400, ERRORS.USER_EXISTS);
  const validationData = await insertUserSchema.validateAsync(user);

  validationData.password = await encryptPassword(validationData.password);

  await userRepository.createUser(validationData);
};

exports.login = async (email, password) => {
  if (!email || !password) throw new HttpError(400, ERRORS.INVALID_DATA);
  const user = await userRepository.findUserByEmail(email);

  if (!user) throw new HttpError(400, ERRORS.USER_NOT_FOUND);

  const encryptedPassword = await encryptPassword(password);
  if (user.password !== encryptedPassword)
    throw new HttpError(400, ERRORS.WRONG_PASSWORD);

  const token = signToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  return token;
};
