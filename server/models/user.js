const { DataTypes } = require('sequelize')
const sequelize = require('../startup/db')

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    emailToken: {
        type: DataTypes.STRING(200),
    },
    newEmail: {
        type: DataTypes.STRING(50)
    },
    newEmailToken: {
        type: DataTypes.STRING(200),
    },
    username: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(100)
    },
    about: {
        type: DataTypes.STRING(500)
    },
    link: {
        type: DataTypes.STRING(200)
    },
    image: {
        type: DataTypes.STRING(200)
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
    },
    resetToken: {
        type: DataTypes.STRING(200),
    }
})
/*
User.sync({ alter: true })
    .then(() => console.log('The `users` table was just (re)created!'))
    .catch(error => console.log('Error synchronizing `users` table', error))
*/
module.exports = User