const express = require("express");

const router = express.Router();
const ChatBotController = require("../controllers/ChatBotController");



router.get("/:chatbotId", ChatBotController.getChatbot);
router.put("/:chatbotId", ChatBotController.updateChatbot);
router.delete("/:chatbotId", ChatBotController.deleteChatbot);
router.post("/:chatbotId/conversations", ChatBotController.conversationChatbot)
router.get("/:chatbotId/conversations",ChatBotController.getAllCoversationsForChatbot)
module.exports = router;



// POST /chatbots/:chatbotId/conversations - Start a new conversation for a chatbot
// GET /chatbots/:chatbotId/conversations - List all conversations for a chatbot