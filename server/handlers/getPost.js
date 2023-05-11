const User = require("../models/user")
const Post = require("../models/post")
const Like = require("../models/like")
const Dislike = require("../models/dislike")

module.exports = async (req, res) => {
    const postId = req.params.id // id of the post that the user retrieved
    const currentUserId = req.user.id // the user that is logged in now

    // find the post with the specified id
    const post = await Post.findOne({
        where: { id: postId },
        include: [
            {
                model: User,
                attributes: ['username'],
            },
        ],
    })

    // retrieve all replies made to the current post
    const repliedPosts = await Post.findAll({
        where: { repliedId: postId },
        include: [
            {
                model: User,
                attributes: ['username'],
            },
        ],
    })

    let likeByCurrentUser
    let dislikeByCurrentUser

    if (currentUserId) {
        // check if the currently logged in user liked the current post
        likeByCurrentUser = await Like.findOne({
            where: {
                postId,
                userId: currentUserId
            }
        })

        // check if the currently logged in user disliked the current post
        dislikeByCurrentUser = await Dislike.findOne({
            where: {
                postId,
                userId: currentUserId
            }
        })
    }

    res.send({ ...post, repliedPosts, liked: likeByCurrentUser ? true : false, disliked: dislikeByCurrentUser ? true : false})
}