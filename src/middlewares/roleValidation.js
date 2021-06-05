const HttpError = require("../utils/httpError");

const roleValidation = (role) => {
  let roles = "";
  if (role) {
    roles = Array.isArray(role) ? role : [role];
  }
  return (req, res, next) => {
    if (![...roles, "admin"].includes(req.user?.role)) throw new HttpError(401);
    next();
  };
};
module.exports = roleValidation;
