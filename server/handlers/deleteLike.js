const Like = require('../models/like')
const Post = require('../models/post')
const Sequelize = require('sequelize')

module.exports = async (req, res) => {
    const currentUserId = req.user.id // id of currently logged in user
    const postId = req.params.id // id of the liked post taken from query parameters

    // remove the like from the post
    await Like.destroy({
        where: {
            postId,
            userId: currentUserId
        }
    })

    // decrement the value of 'likes' of the post with the specified id
    await Post.update({
        likes: Sequelize.literal('likes - 1')
    }, {
        where: { id: postId }
    })

    res.sendStatus(200)
}