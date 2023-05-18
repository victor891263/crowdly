const Post = require("../models/post")
const Sequelize = require("sequelize")
const JSONSimplify = require("../utilities/JSONsimplify");
const User = require("../models/user");

module.exports = async (req, res) => {
    const posts = await Post.findAll({
        where: { repliedId: null },
        attributes: {
            include: [
                [Sequelize.literal('likes + dislikes + replies'), 'total']
            ]
        },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ],
        order: [Sequelize.literal('total DESC')]
    })

    res.send(JSONSimplify(posts))
}