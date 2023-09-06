const Follow = require('../models/follow')
const User = require('../models/user')
const Sequelize = require('sequelize')
const Notification = require("../models/notification")
const {GraphQLError} = require("graphql")

module.exports = async (_, args, context) => {
    // deny access if no user is logged in
    if (!context.user) {
        throw new GraphQLError(`You don't have permission to do this`, {
            extensions: {
                http: {
                    status: 400
                }
            }
        })
    }

    const currentUserId = context.user.id // id of currently logged in user
    const userId = args.id // id of the user that the currently logged in user followed, taken from query parameters

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

    // send a notification to the user being followed
    await Notification.create({
        userId: String(currentUserId),
        targetUserId: userId
    })

    return true
}