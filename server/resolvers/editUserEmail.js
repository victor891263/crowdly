const {GraphQLError} = require("graphql")
const User = require('../models/user')
const sendEmail = require("../utilities/sendEmail")
const crypto = require('crypto')

module.exports = async (_, args, context) => {
    const newEmail = args.email

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

    // check if the new email is already taken. If it is, don't proceed
    const usersWithEmail = await User.count({
        where: { email: newEmail }
    })
    const usersWithNewEmail = await User.count({
        where: { newEmail }
    })
    if ((usersWithEmail > 0) || (usersWithNewEmail > 0)) {
        throw new GraphQLError(`The provided email is already taken`, {
            extensions: {
                http: {
                    status: 400
                }
            }
        })
    }

    // generate a 64-character long random string
    const verificationToken = crypto.randomBytes(32).toString('hex')

    // add the information to the user document that the user is trying to update their email, along with verification id for the email
    await User.update({
        newEmail,
        newEmailToken: verificationToken
    }, {
        where: { id: context.user.id }
    })

    // send the verification link to the user's email
    await sendEmail(newEmail, verificationToken, 'email')

    return true
}