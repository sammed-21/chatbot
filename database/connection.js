const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage:'path/to/database.sqlite',
    // storage:'database.sqlite',
})

module.exports = sequelize