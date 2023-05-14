const Post = require('../models/post')

module.exports = async (req, res) => {
    const profileId = req.params.id // id of the user/profile that the user retrieved

    // get posts that this user made
    const posts = await Post.findAll({
        where: { userId: profileId }
    })

    res.send(posts)
}