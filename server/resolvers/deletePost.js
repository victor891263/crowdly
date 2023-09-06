const Post = require('../models/post')
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

    // get data
    const postId = args.id
    const repliedId = args.repliedId

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

    return true
}