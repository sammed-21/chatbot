
// Conversation.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");
const Chatbot = require("./Chatbot");
const EndUser = require("./EndUser");
// const models = require("../models")

class Conversation extends Model {}

Conversation.init(
  {
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "active",
    },
  },
  {
    sequelize,
    modelName: "conversation",
  }
);
Conversation.associate =()=> {
  
  Conversation.belongsTo(Chatbot, { foreignKey: "chatbotId" });
}
Conversation.belongsTo(EndUser, { foreignKey: "endUserId" });


module.exports = Conversation;
