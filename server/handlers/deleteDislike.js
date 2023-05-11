const Dislike = require('../models/dislike')
const Post = require('../models/post')
const Sequelize = require('sequelize')

module.exports = async (req, res) => {
    const currentUserId = req.user.id // id of currently logged in user
    const postId = req.params.id // id of the disliked post taken from query parameters

    // remove the dislike from the post
    await Dislike.destroy({
        where: {
            postId,
            userId: currentUserId
        }
    })

    // decrement the value of 'dislikes' of the post with the specified id
    await Post.update({
        dislikes: Sequelize.literal('dislikes - 1')
    }, {
        where: { id: postId }
    })

    res.sendStatus(200)
}