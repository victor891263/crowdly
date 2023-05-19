const Follow = require('../models/follow')
const User = require('../models/user')
const Sequelize = require('sequelize')
const Notification = require("../models/notification");
const JSONSimplify = require("../utilities/JSONsimplify");

module.exports = async (req, res) => {
    const currentUserId = req.user.id // id of currently logged in user
    const userId = req.params.id // id of the user that the currently logged in user followed, taken from query parameters

    // add the currently logged in user as a follower of the specified user
    await Follow.create({
        followerId: currentUserId,
        followedId: userId
    })

    // increment the number of follows of the currently logged in user
    await User.update({
        follows: Sequelize.literal('follows + 1')
    }, {
        where: { id: currentUserId }
    })

    // increment the number of followers of the specified (target) user
    await User.update({
        followers: Sequelize.literal('followers + 1')
    }, {
        where: { id: userId }
    })

    console.log('first!')

    // send a notification to the user being followed
    await Notification.create({
        userId: String(currentUserId),
        targetUserId: userId
    })

    console.log('second!')

    res.sendStatus(200)
}