const Post = require("../models/post")
const Sequelize = require("sequelize")

module.exports = async (req, res) => {
    const posts = await Post.findAll({
        attributes: {
            include: [
                [Sequelize.literal('likes + dislikes + replies'), 'total']
            ]
        },
        order: [Sequelize.literal('total DESC')]
    })

    console.log(posts)
    res.send(JSON.stringify(posts, null, 2))
}