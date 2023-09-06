const Post = require('../models/post')
const User = require('../models/user')
const JSONSimplify = require('../utilities/JSONsimplify')

module.exports = async (_, args, context) => {
    const userId = args.id

    const posts = await Post.findAll({
        where: {
            userId
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