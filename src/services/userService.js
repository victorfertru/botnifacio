const userRepository = require("../repositories/userRepository");
const { insertUserSchema } = require("../validations/userValidation");
const encryptPassword = require("../utils/encryptPassword");
const { signToken } = require("./jwtService");
const HttpError = require("../utils/httpError");

exports.signup = async (user) => {
  const validationData = await insertUserSchema.validateAsync(user);

  validationData.password = await encryptPassword(validationData.password);

  await userRepository.createUser(validationData);
};

exports.login = async (email, password) => {
  if (!email || !password) throw new HttpError(400, "Invalid data provided");
  const user = await userRepository.findUserByEmail(email);

  if (!user) throw new HttpError(400, "User not found");

  const encryptedPassword = await encryptPassword(password);
  if (user.password !== encryptedPassword)
    throw new HttpError(400, "Wrong password");

  const token = await signToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  return token;
};
