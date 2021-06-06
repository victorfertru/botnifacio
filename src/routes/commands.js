var express = require("express");
var router = express.Router();
const commandService = require("../services/commandService");
const roleValidation = require("../middlewares/roleValidation");
router.get("/all", roleValidation(), async (req, res, next) => {
  try {
    const commands = await commandService.getAllCommands();
    res.status(200).json(commands);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", roleValidation(), async (req, res, next) => {
  try {
    const { id } = req.params;
    const command = await commandService.getCommandById(id);
    res.status(200).json(command);
  } catch (error) {
    next(error);
  }
});

router.post("/", roleValidation(), async (req, res, next) => {
  try {
    await commandService.createCommand(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.put("/", roleValidation(), async (req, res, next) => {
  try {
    await commandService.editCommand(req.body);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", roleValidation(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await commandService.removeCommand(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
