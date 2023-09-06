const User = require("../models/user")
const Post = require("../models/post")
const JSONSimplify = require("../utilities/JSONsimplify")

module.exports = async (parent, args, context) => {
    const postId = parent.id

    // retrieve all replies made to the parent post
    const repliedPosts = await Post.findAll({
        where: { repliedId: postId },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })

    return JSONSimplify(repliedPosts)
}