const User = require('../models/user')
const Follow = require('../models/follow')

module.exports = async (req, res) => {
    const profileId = req.params.id // id of the user/profile that the user retrieved

    // get ids of all users that this user has followed
    const follows = await Follow.findAll({
        where: { followerId: profileId }
    })

    // extract userids
    const userIds = follows.map(row => row.followedId)

    // get data (from users table) of users that this user has followed
    const users = await User.findAll({
        where: { id: userIds },
        attributes: ['id', 'username']
    })

    res.send(users)
}