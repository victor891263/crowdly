const Notification = require('../models/notification')
const JSONSimplify = require("../utilities/JSONsimplify")
const User = require("../models/user")
const {GraphQLError} = require("graphql")

module.exports = async (_, __, context) => {
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

    const notifications = await Notification.findAll({
        where: { targetUserId: currentUserId },
        include: [
            {
                model: User,
                attributes: ['username', 'image']
            }
        ],
        order: [['createdAt', 'DESC']]
    })

    return JSONSimplify(notifications)
}