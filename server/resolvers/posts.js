const Post = require('../models/post')
const User = require('../models/user')
const { Op } = require('sequelize')
const JSONSimplify = require('../utilities/JSONsimplify')

module.exports = async (_, args, context) => {
    const body = args.body

    const posts = await Post.findAll({
        where: {
            body: { [Op.iLike]: `%${body}%` }
        },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ],
        order: [['createdAt', 'DESC']]
    })

    return JSONSimplify(posts)
}