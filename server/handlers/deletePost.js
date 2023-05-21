const Post = require('../models/post')
const Sequelize = require("sequelize");

module.exports = async (req, res) => {
    const currentUserId = req.user.id // id of currently logged in user

    // get data
    const postId = req.params.id
    const repliedId = req.query.repliedId

    // if the post to be deleted is a reply to another post, decrement the reply count of said post
    if (repliedId !== 'null') {
        await Post.update({
            replies: Sequelize.literal('replies - 1')
        }, {
            where: { id: repliedId }
        })
    }

    // delete the specified post from the database ONLY IF that post is submitted by the currently logged in user
    await Post.destroy({
        where: {
            id: postId,
            userId: currentUserId
        }
    })

    res.sendStatus(200)
}