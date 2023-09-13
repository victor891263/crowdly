const User = require('../models/user')
const {GraphQLError} = require("graphql")
const sendEmail = require("../utilities/sendEmail")

module.exports = async (_, args, context) => {
    const email = args.email

    // check if the new username is already present in the database
    const user = await User.findOne({
        where: { email }
    })
    if (!user) {
        throw new GraphQLError(`No account exists with the provided email address`, {
            extensions: {
                http: {
                    status: 404
                }
            }
        })
    }

    // generate a 64-character long random string
    const recoveryId = crypto.randomBytes(32).toString('hex')

    // update the user
    await user.update({
        resetToken: recoveryId
    })

    // send the verification link to the user's email
    await sendEmail(email, recoveryId, 'password')

    return true
}