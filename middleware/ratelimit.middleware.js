const { rateLimit } = require("express-rate-limit");

const limiter = (minute, limit) => {
  return rateLimit({
    windowMs: minute * 60 * 1000,
    limit: limit,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  });
};

module.exports = limiter;
