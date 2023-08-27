const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Conversation = require("../models/Conversation")
class EndUser extends Model {}
EndUser.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true  
    }
}, {
    sequelize,
    modelName: 'enduser'
});
EndUser.associate = () => {
    EndUser.hasMany(Conversation, { foreignKey: "endUserId" });
  };
  
module.exports = EndUser;