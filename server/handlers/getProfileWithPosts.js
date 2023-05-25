const Post = require('../models/post')
const User = require('../models/user')
const JSONSimplify = require("../utilities/JSONsimplify");

module.exports = async (req, res) => {
    const profileId = req.params.id // id of the user/profile that the user retrieved

    // get posts that this user made
    const posts = await Post.findAll({
        where: { userId: profileId },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ],
        order: [['createdAt', 'DESC']]
    })

    res.send(JSONSimplify(posts))
}