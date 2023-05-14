const { DataTypes } = require('sequelize')
const sequelize = require('../startup/db')

const User = require('./user')
const Post = require('./post')

const Dislike = sequelize.define('Dislike', {
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
    through: Dislike,
    foreignKey: 'postId'
})
User.belongsToMany(Post, {
    through: Dislike,
    foreignKey: 'userId'
})
/*
Dislike.sync({ alter: true })
    .then(() => console.log('The `dislikes` table was just (re)created!'))
    .catch(error => console.log('Error synchronizing `dislikes` table', error))
*/
module.exports = Dislike