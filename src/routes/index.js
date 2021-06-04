const express = require("express");
const router = express.Router();
const pkg = require("../../package.json");

router.get("/health", (_, res) => {
  res.send({
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
  });
});

module.exports = router;
