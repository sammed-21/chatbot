


const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");
const Conversation = require("./Conversation");
const User = require("./User"); // Make sure the import path is correct
class Chatbot extends Model {}

Chatbot.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "chatbot",
  }
);
Chatbot.associate = () => {
  Chatbot.belongsTo(User, { foreignKey: 'userId' });
}
Chatbot.hasMany(Conversation, {foreignKey: "chatbotId" });

module.exports = Chatbot;
