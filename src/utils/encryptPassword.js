const crypto = require("crypto");
const { promisify } = require("util");

const encrypter = promisify(crypto.scrypt);

const encryptPassword = async (password) => {
  const encryptedPassword = await encrypter(password, process.env.SALT, 32);
  return encryptedPassword.toString("hex");
};

module.exports = encryptPassword;
