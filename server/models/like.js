const { DataTypes } = require('sequelize')
const sequelize = require('../startup/db')

const User = require('./user')
const Post = require('./post')

const Like = sequelize.define('Like', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

// assign associations and as a result, foreign keys
Post.belongsToMany(User, {
    through: Like,
    foreignKey: 'postId'
})
User.belongsToMany(Post, {
    through: Like,
    foreignKey: 'userId'
})

/*
Like.sync({ alter: true })
    .then(() => console.log('The `likes` table was just (re)created!'))
    .catch(error => console.log('Error synchronizing `likes` table', error))
*/

module.exports = Like