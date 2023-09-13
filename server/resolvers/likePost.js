const {GraphQLError} = require("graphql")
const Like = require('../models/like')
const Post = require('../models/post')
const Sequelize = require('sequelize')
const User = require("../models/user")
const Notification = require("../models/notification")
const JSONSimplify = require("../utilities/JSONsimplify")

module.exports = async (_, args, context) => {
    // deny access if no user is logged in
    if (!context.user) {
        throw new GraphQLError(`You don't have permission to do this`, {
            extensions: {
                http: {
                    status: 400
                }
            }
        })
    }

    const currentUserId = context.user.id // id of currently logged in user
    const postId = args.id // id of the liked post taken from query parameters

    // like the post
    await Like.create({
        postId,
        userId: currentUserId
    })

    // increment the value of 'likes' and 'points' of the post with the specified id
    await Post.update({
        likes: Sequelize.literal('likes + 1'),
        points: Sequelize.literal('points + 1')
    }, {
        where: { id: postId }
    })

    // to send a notification, first grab the id of the user that created the post that is liked
    const targetPost = await Post.findOne({
        where: { id: postId },
        include: [
            {
                model: User,
                attributes: ['id']
            }
        ]
    })

    // then send a notification to the creator of the post
    await Notification.create({
        postId: postId,
        userId: currentUserId,
        targetUserId: JSONSimplify(targetPost).User.id
    })

    return true
}