const User = require('../models/user')
const { Op } = require('sequelize')
const JSONSimplify = require('../utilities/JSONsimplify')

module.exports = async (_, args, context) => {
    const username = args.username

    const profiles = await User.findAll({
        where: {
            username: { [Op.iLike]: `%${username}%` }
        },
        attributes: ['id', 'username']
    })

    return JSONSimplify(profiles)
}