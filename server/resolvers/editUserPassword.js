const {GraphQLError} = require("graphql")
const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = async (_, args, context) => {
    const { currentPassword, newPassword } = args

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

    // get the password from the database
    const user = await User.findOne({
        where: { id: context.user.id }
    })

    // check if the given password matches with the one in the database. If it doesn't, don't proceed
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password)
    if (!isPasswordValid) {
        throw new GraphQLError(`The "current password" you typed in doesn't match with your actual current password`, {
            extensions: {
                http: {
                    status: 400
                }
            }
        })
    }

    // hash the password to make it complex and unreadable
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPassword, salt)

    // update the password
    await user.update({
        password: hashedPassword
    })

    return true
}