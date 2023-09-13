const User = require('../models/user')
const {GraphQLError} = require("graphql")
const jwt = require('jsonwebtoken')

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

    // if no user with the given verification id is found, return an error the the client
    const user = await User.findOne({
        where: {
            id: context.user.id,
            emailToken: args.id
        }
    })
    if (!user) {
        throw new GraphQLError(`The verification link appears to be invalid`, {
            extensions: {
                http: {
                    status: 400
                }
            }
        })
    }

    // remove the verification id
    await user.update({
        emailToken: null
    })

    // create a new json web token and send it to the client
    return jwt.sign({
        id: user.id,
        isVerified: true
    }, process.env.JWT_SECRET)
}