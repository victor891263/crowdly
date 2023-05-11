const Post = require('../models/post')

module.exports = async (req, res) => {
    const currentUserId = req.user.id // id of currently logged in user

    // get data
    const postId = req.params.id

    // delete the specified post from the database ONLY IF that post is submitted by the currently logged in user
    await Post.destroy({
        where: {
            id: postId,
            userId: currentUserId
        }
    })
    res.sendStatus(200)
}