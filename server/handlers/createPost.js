const Post = require('../models/post')
const Notification = require('../models/notification')
const JSONSimplify = require("../utilities/JSONsimplify");
const Sequelize = require("sequelize");
const User = require("../models/user");

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

    // if the post is a reply, first grab the id of the user that created the post that is being replied to
    // then send a notification to the creator of the post (if the post is a reply)
    if (post.repliedId) {
        await Notification.create({
            postId: createdPost.id,
            isReply: true,
            userId: currentUserId,
            targetUserId: post.targetUserId
        })
    }

    res.send(JSONSimplify(createdPost))
}