const Post = require('../models/post')
const Notification = require('../models/notification')
const JSONSimplify = require("../utilities/JSONsimplify")
const Sequelize = require("sequelize")
const {GraphQLError} = require("graphql")

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

    // get post data from request body
    const postData = args.input

    // add the post to the database
    const createdPost = await Post.create({
        body: postData.body,
        repliedId: postData.repliedId,
        quotedId: postData.quotedId,
        userId: currentUserId
    })

    // if the post is a reply, find the target post and increment its reply count
    if (postData.repliedId) {
        await Post.update({
            replies: Sequelize.literal('replies + 1')
        }, {
            where: { id: postData.repliedId }
        })
    }

    // if the post is a reply, first grab the id of the user that created the post that is being replied to
    // then send a notification to the creator of the post (if the post is a reply)
    if (postData.repliedId) {
        await Notification.create({
            postId: createdPost.id,
            isReply: true,
            userId: currentUserId,
            targetUserId: postData.targetUserId
        })
    }

    return JSONSimplify(createdPost).id
}