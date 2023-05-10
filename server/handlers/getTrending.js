const Post = require("../models/post")
const sequelize = require("../startup/db")

module.exports = async (req, res) => {
    const posts = await Post.findAll({
        attributes: {
            include: [
                [sequelize.literal('likes + dislikes + replies'), 'total']
            ]
        },
        order: [sequelize.literal('total DESC')]
    })
    res.send(JSON.stringify(posts, null, 2))
}