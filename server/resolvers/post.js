const User = require("../models/user")
const Post = require("../models/post")
const Like = require("../models/like")
const Dislike = require("../models/dislike")
const JSONSimplify = require("../utilities/JSONsimplify")
const {GraphQLError} = require("graphql")

module.exports = async (_, args, context) => {
    const postId = args.id // id of the post that the user retrieved
    const currentUserId = context.user && context.user.id // the user that is logged in now

    // find the post with the specified id
    const post = await Post.findOne({
        where: { id: postId },
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            }
        ]
    })

    // if the post with the given id doesn't exist, tell that to the client, instead of proceeding
    if (!post) {
        throw new GraphQLError(`The post you're trying to view doesn't exist`, {
            extensions: {
                http: {
                    status: 404
                }
            }
        })
    }

    const likeByCurrentUser = currentUserId && await Like.findOne({
        where: {
            postId,
            userId: currentUserId
        }
    })
    const dislikeByCurrentUser = currentUserId && await Dislike.findOne({
        where: {
            postId,
            userId: currentUserId
        }
    })

    return {
        ...JSONSimplify(post),
        liked: !!likeByCurrentUser,
        disliked: !!dislikeByCurrentUser
    }
}