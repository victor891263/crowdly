const { DataTypes } = require('sequelize')
const sequelize = require('../startup/db')

const User = require('./user')

const Post = sequelize.define('Post', {
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    repliedId: {
        type: DataTypes.INTEGER
    },
    quotedId: {
        type: DataTypes.INTEGER
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    dislikes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    replies: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
})

// specifying relationship between posts and users
User.hasMany(Post, {
    foreignKey: 'userId'
})
Post.belongsTo(User, {
    foreignKey: 'userId'
})

Post.sync({ alter: true })
    .then(() => console.log('The `posts` table was just (re)created!'))
    .catch(error => console.log('Error synchronizing `posts` table', error))

module.exports = Post