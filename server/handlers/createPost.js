const Post = require('../models/post')
const JSONSimplify = require("../utilities/JSONsimplify");
const Sequelize = require("sequelize");

module.exports = async (req, res) => {
    const currentUserId = req.user.id // id of currently logged in user

    // get post data from request body
    const post = req.body

    // add the post to the database
    const createdPost = await Post.create({
        body: post.body,
        repliedId: post.repliedId,
        quotedId: post.quotedId,
        userId: currentUserId
    })

    // if the post is a reply, find the target post and increment its reply count
    if (post.repliedId) {
        await Post.update({
            replies: Sequelize.literal('replies + 1')
        }, {
            where: { id: post.repliedId }
        })
    }

    res.send(JSON.stringify(createdPost, null, 2))
}