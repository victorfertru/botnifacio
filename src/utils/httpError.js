const { STATUS_CODES } = require("http");

class HttpError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode || 500;
    this.message = message || STATUS_CODES[this.statusCode];
  }
}

module.exports = HttpError;
