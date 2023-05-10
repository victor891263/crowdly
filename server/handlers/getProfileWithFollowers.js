const User = require('../models/user')
const Follow = require('../models/follow')

module.exports = async (req, res) => {
    const profileId = req.query.id // id of the user/profile that the user retrieved

    // get this user's data
    const profile = await User.findOne({
        where: { id: profileId },
        attributes: ['id', 'username']
    })

    // get ids of all users that chose to follow this user
    const follows = await Follow.findAll({
        where: { followedId: profileId }
    })

    // extract userids
    const userIds = follows.map(row => row.followedId)

    // get data (from users table) of users that chose to follow this user
    const users = await User.findAll({
        where: { id: userIds },
        attributes: ['id', 'username']
    })

    res.send({ ...profile, users })
}