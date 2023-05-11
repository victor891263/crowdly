const Post = require('../models/post')

module.exports = async (req, res) => {
    const currentUserId = req.user.id // id of currently logged in user

    // get data
    const postId = req.params.id
    const newPost = req.body

    // update the specified post in the database ONLY IF that post is submitted by the currently logged in user
    await Post.update({
        body: newPost.body
    }, {
        where: {
            id: postId,
            userId: currentUserId
        }
    })
    res.sendStatus(200)
}