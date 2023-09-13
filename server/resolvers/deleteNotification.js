const {GraphQLError} = require("graphql")
const Notification = require('../models/notification')

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

    const notificationId = args.id

    await Notification.update({
        seen: true
    }, {
        where: { id: notificationId }
    })

    return true
}