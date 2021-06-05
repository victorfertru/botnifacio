const express = require("express");
const router = express.Router();
const pkg = require("../../package.json");
const roleValidation = require("../middlewares/roleValidation");

router.get("/health", roleValidation(), (_, res) => {
  res.send({
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
  });
});

module.exports = router;
