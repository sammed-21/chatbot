const Chatbot = require("../models/Chatbot");

const Conversation = require("../models/Conversation");

const ChatBotController = {
  getChatbot: async (req, res) => {
    const { chatbotId } = req.params;

    try {
      const chatbot = await Chatbot.findByPk(chatbotId);

      if (!chatbot) {
        return res.status(404).json({ error: "Chatbot not found" });
      }

      return res.status(200).json(chatbot);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  },

  updateChatbot: async (req, res) => {
    const { chatbotId } = req.params;
    const { name, description } = req.body;

    try {
      const chatbot = await Chatbot.findByPk(chatbotId);

      if (!chatbot) {
        return res.status(404).json({ error: "Chatbot not found" });
      }

      chatbot.name = name;
      chatbot.description = description;
      await chatbot.save();

      return res.status(200).json(chatbot);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  },

  deleteChatbot: async (req, res) => {
    const { chatbotId } = req.params;

    try {
      const chatbot = await Chatbot.findByPk(chatbotId);

      if (!chatbot) {
        return res.status(404).json({ error: "Chatbot not found" });
      }

      await chatbot.destroy();

      return res.status(204).send("chatbot hase been deleted");
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  },
  conversationChatbot: async (req, res) => {
    try {
      const { chatbotId } = req.params;
      console.log(chatbotId);
      const { message, status } = req.body;

      const conversation = await Conversation.create({
        message,
        chatbotId,
        status,
      });

      return res.status(201).json(conversation);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  getAllCoversationsForChatbot: async (req, res) => {
    try {
      const chatbotId = req.params.chatbotId;

      const chatbot = await Chatbot.findByPk(chatbotId, {
        include: Conversation,
      });

      if (!chatbot) {
        return res.status(404).json({ message: "Chatbot not found." });
      }

      return res.status(200).json(chatbot.conversations);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = ChatBotController;
