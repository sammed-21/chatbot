const express = require("express");

const router = express.Router();
const ConversationController = require("../controllers/ConversationController");



router.get("/:conversationId", ConversationController.getConversatationById);
router.put("/:conversationId", ConversationController.updateConversationById);
router.delete("/:conversationId", ConversationController.deleteConversation);

module.exports = router;

