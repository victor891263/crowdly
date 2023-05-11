const Dislike = require('../models/dislike')
const Post = require('../models/post')
const Sequelize = require('sequelize')

module.exports = async (req, res) => {
    const currentUserId = req.user.id // id of currently logged in user
    const postId = req.params.id // id of the disliked post taken from query parameters

    // dislike the post
    await Dislike.create({
        postId,
        userId: currentUserId
    })

    // increment the value of 'dislikes' of the post with the specified id
    await Post.update({
        dislikes: Sequelize.literal('dislikes + 1')
    }, {
        where: { id: postId }
    })

    res.sendStatus(200)
}