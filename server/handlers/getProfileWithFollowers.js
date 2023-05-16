const User = require('../models/user')
const Follow = require('../models/follow')
const JSONSimplify = require("../utilities/JSONsimplify");

module.exports = async (req, res) => {
    const profileId = req.params.id // id of the user/profile that the user retrieved

    // get ids of all users that chose to follow this user
    const follows = await Follow.findAll({
        where: { followedId: profileId }
    })

    // extract userids
    const userIds = follows.map(row => row.followerId)

    // get data (from users table) of users that chose to follow this user
    const users = await User.findAll({
        where: { id: userIds },
        attributes: ['id', 'username']
    })

    res.send(JSONSimplify(users))
}