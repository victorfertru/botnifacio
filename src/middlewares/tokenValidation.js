const { verifyToken } = require("../services/jwtService");

const tokenValidation = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.slice(7);
    const { id, email, role } = verifyToken(token);
    req.user = { id, email, role };
  }
  next();
};

module.exports = tokenValidation;
