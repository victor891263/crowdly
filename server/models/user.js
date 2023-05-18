const { DataTypes } = require('sequelize')
const sequelize = require('../startup/db')

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    about: {
        type: DataTypes.STRING
    },
    follows: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    followers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
})
/*
User.sync({ alter: true })
    .then(() => console.log('The `users` table was just (re)created!'))
    .catch(error => console.log('Error synchronizing `users` table', error))
*/
module.exports = User