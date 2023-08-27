const express = require("express");

const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);
router.get("/:userId", UserController.getUserById);
router.put("/:userId", UserController.updateUserById);
router.delete("/:userId", UserController.findUserByIdAndDelete);
router.post("/:userId/chatbots",UserController.createChatbot)
router.get("/:userId/chatbots",UserController.listUserChatbots)
module.exports = router;
