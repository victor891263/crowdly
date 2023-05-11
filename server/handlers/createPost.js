const Post = require('../models/post')

module.exports = async (req, res) => {
    const currentUserId = req.user.id // id of currently logged in user

    // get post data from request body
    const post = req.body

    // add the post to the database
    await Post.create({
        body: post.body,
        repliedId: post.repliedId,
        quotedId: post.quotedId,
        userId: currentUserId
    })
    res.sendStatus(200)
}