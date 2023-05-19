const { DataTypes } = require('sequelize')
const sequelize = require('../startup/db')
const User = require('./user')

const Notification = sequelize.define('Notification', {
    postId: {
        type: DataTypes.INTEGER
    },
    isReply: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    targetUserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

// assign associations and as a result, foreign keys

User.hasMany(Notification, {
    foreignKey: 'userId'
})
Notification.belongsTo(User, {
    foreignKey: 'userId'
})

/*
Notification.sync({ alter: true })
    .then(() => console.log('The `notifications` table was just (re)created!'))
    .catch(error => console.log('Error synchronizing `notifications` table', error))
*/
module.exports = Notification

/*

User.belongsToMany(User, {
    through: Notification,
    as: 'target',
    foreignKey: 'targetUserId'
})
User.belongsToMany(User, {
    through: Notification,
    as: 'creator',
    foreignKey: 'userId'
})

*/