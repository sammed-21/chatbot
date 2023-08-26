const express = require("express");

const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);
router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUserById);
router.delete("/:id", UserController.findUserByIdAndDelete);
module.exports = router;
