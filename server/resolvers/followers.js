const User = require('../models/user')
const Follow = require('../models/follow')
const JSONSimplify = require("../utilities/JSONsimplify")

module.exports = async (_, args, context) => {
    const profileId = args.followedId

    // get all users that chose to follow this user
    const follows = await Follow.findAll({
        where: { followedId: profileId }
    })

    // extract user ids
    const userIds = follows.map(row => row.followerId)

    // get data (from users table) of users that chose to follow this user
    const users = await User.findAll({
        where: { id: userIds },
        attributes: ['id', 'username', 'image']
    })

    return JSONSimplify(users)
}