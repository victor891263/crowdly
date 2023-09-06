const {GraphQLError} = require("graphql")
const Post = require('../models/post')

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
    const newPostData = args.input

    // update the specified post in the database ONLY IF that post is submitted by the currently logged in user
    await Post.update({
        body: newPostData.body
    }, {
        where: {
            id: postId,
            userId: currentUserId
        }
    })

    return true
}