const User = require('../models/user')
const Follow = require('../models/follow')
const JSONSimplify = require("../utilities/JSONsimplify")

module.exports = async (_, args, context) => {
    const profileId = args.followerId

    // get all users that this user has followed
    const follows = await Follow.findAll({
        where: { followerId: profileId }
    })

    // extract user ids
    const userIds = follows.map(row => row.followedId)

    // get data (from users table) of users that this user has followed
    const users = await User.findAll({
        where: { id: userIds },
        attributes: ['id', 'username', 'image']
    })

    return JSONSimplify(users)
}