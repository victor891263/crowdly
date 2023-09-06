const User = require('../models/user')
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

    const newUserData = args.input // new account data
    const currentUserId = context.user.id // id of currently logged in user

    // check if the new username is already present in the database
    const user = await User.findOne({
        where: { username: newUserData.username }
    })

    // if the username already belongs to the currently logged in user (that is - they didn't change the username), dont send an error. Otherwise, send an error
    if (user.id !== currentUserId) {
        throw new GraphQLError(`The new username you picked is already taken`, {
            extensions: {
                http: {
                    status: 400
                }
            }
        })
    }

    // update the profile of the currently logged in user with new information
    await User.update({
        username: newUserData.username,
        about: newUserData.about
    }, {
        where: { id: currentUserId }
    })

    return true
}