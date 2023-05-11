const Follow = require('../models/follow')
const User = require('../models/user')
const Sequelize = require('sequelize')

module.exports = async (req, res) => {
    const currentUserId = req.user.id // id of currently logged in user
    const userId = req.params.id // id of the user that the currently logged in user unfollowed, taken from query parameters

    // remove the currently logged in user from the followers of the specified user
    await Follow.destroy({
        where: {
            followerId: currentUserId,
            followedId: userId
        }
    })

    // decrement the number of follows of the currently logged in user
    await User.update({
        follows: Sequelize.literal('follows - 1')
    }, {
        where: { id: currentUserId }
    })

    // decrement the number of followers of the specified (target) user
    await User.update({
        followers: Sequelize.literal('followers - 1')
    }, {
        where: { id: userId }
    })

    res.sendStatus(200)
}