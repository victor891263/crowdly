const {GraphQLError} = require("graphql")
const Dislike = require('../models/dislike')
const Post = require('../models/post')
const Sequelize = require('sequelize')

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
    const postId = args.id // id of the disliked post taken from query parameters

    // remove the dislike from the post
    await Dislike.destroy({
        where: {
            postId,
            userId: currentUserId
        }
    })

    // decrement the value of 'dislikes' and increment the value of 'points' of the post with the specified id
    await Post.update({
        dislikes: Sequelize.literal('dislikes - 1'),
        points: Sequelize.literal('points + 1')
    }, {
        where: { id: postId }
    })

    return true
}