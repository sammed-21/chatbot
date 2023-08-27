 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Chatbot = require('./Chatbot');

class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user'
});

User.hasMany(Chatbot, { foreignKey: 'userId' });
    
module.exports = User;
