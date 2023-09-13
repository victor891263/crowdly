const {GraphQLError} = require("graphql")
const User = require('../models/user')

module.exports = async (_, args, context) => {
    const verificationId = args.id

    // find the user with the currently logged in info and the verification id
    const user = await User.findOne({
        where: {
            id: context.user.id,
            newEmailToken: verificationId
        }
    })

    // if the user doesn't exist, don't proceed
    if (!user) {
        throw new GraphQLError(`The verification id is invalid`, {
            extensions: {
                http: {
                    status: 400
                }
            }
        })
    }

    // change the user's email to the new email and empty the new email and its validation token
    await user.update({
        email: user.newEmail,
        newEmail: null,
        newEmailToken: null
    })

    return true
}