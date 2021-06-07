const { STATUS_CODES } = require("http");

class HttpError extends Error {
  constructor(statusCode, message) {
    super(message);

    Error.captureStackTrace(this, this.constructor);
    this.statusCode = statusCode || 500;
    this.name = this.constructor.name;
    this.message = message || STATUS_CODES[this.statusCode];
  }
}

module.exports = HttpError;
