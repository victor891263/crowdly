const User = require('../models/user')
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

    // delete the account with the same id as that of the currently logged in user
    await User.destroy({
        where: { id: currentUserId }
    })

    return true
}