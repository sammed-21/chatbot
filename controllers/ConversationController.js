// const Chatbot = require("../models/Chatbot");

// const Conversation = require("../models/Conversation");

// const ConversationController = {
//     getConversatationbyId: async (req, res) => {
//         try {
//           const { conversationId } = req.params;
//           console.log(conversationId);
          
    
//           const conversation = await Conversation.findByPk(conversationId  )
         
    
//           return res.status(201).json(conversation);
//         } catch (error) {
//           console.error(error);
//           return res.status(500).json({ message: "Internal server error" });
//         }
//       },
  
//       updateConversatationById: async (req, res) => {
//     const { conversationId } = req.params;
//     const { message, status } = req.body;

//     try {
//       const conversation = await Conversation.findByPk(conversationId);

//       if (!conversation) {
//         return res.status(404).json({ error: "Chatbot not found" });
//       }

//       conversation.message = message;
//       conversation.status = status;
//       await conversation.save();

//       return res.status(200).json(chatbot);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: "Server error" });
//     }
//   },
//   deleteConversatation: async (req, res) => {
//     const { chatbotId } = req.params;

//     try {
//       const chatbot = await Chatbot.findByPk(chatbotId);

//       if (!chatbot) {
//         return res.status(404).json({ error: "Chatbot not found" });
//       }

//       await chatbot.destroy();

//       return res.status(204).send("chatbot hase been deleted");
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: "Server error" });
//     },
// }

// module.exports = ConversationController;
const Chatbot = require("../models/Chatbot");
const Conversation = require("../models/Conversation");

const ConversationController = {
  getConversatationById: async (req, res) => {
    try {
      const { conversationId } = req.params;
      const conversation = await Conversation.findByPk(conversationId);
      return res.status(200).json(conversation);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  updateConversationById: async (req, res) => {
    const { conversationId } = req.params;
    const { message, status } = req.body;

    try {
      const conversation = await Conversation.findByPk(conversationId);

      if (!conversation) {
        return res.status(404).json({ error: "Conversation not found" });
      }

      conversation.message = message;
      conversation.status = status;
      await conversation.save();

      return res.status(200).json(conversation);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  },

  deleteConversation: async (req, res) => {
    const { conversationId } = req.params;

    try {
      const conversation = await Conversation.findByPk(conversationId);

      if (!conversation) {
        return res.status(404).json({ error: "Conversation not found" });
      }

      await conversation.destroy();

      return res.status(204).send("Conversation has been deleted");
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  },
};

module.exports = ConversationController;
