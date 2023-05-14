const { DataTypes } = require('sequelize')
const sequelize = require('../startup/db')

const Follow = sequelize.define('Follow', {
    followerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    followedId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
/*
Follow.sync({ alter: true })
    .then(() => console.log('The `follows` table was just (re)created!'))
    .catch(error => console.log('Error synchronizing `follows` table', error))
*/
module.exports = Follow