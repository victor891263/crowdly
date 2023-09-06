const User = require('../models/user')
const jwt = require('jsonwebtoken')
const hash = require('../utilities/hash')
const {GraphQLError} = require("graphql")

module.exports = async (_, args, context) => {
    const userData = args.input

    // check if the username given by the guest is already present in the database
    const user = await User.findOne({
        where: { username: userData.username }
    })

    // if the username is already taken, don't proceed
    if (user) {
        throw new GraphQLError(`The username you provided is already taken`, {
            extensions: {
                http: {
                    status: 400
                }
            }
        })
    }

    // hash the password to make it complex and unreadable
    const hashed = await hash(userData.password)

    // add the new user to the database
    const createdUser = await User.create({
        username: userData.username,
        password: hashed
    })

    // create the json web token and send it to the client
    return jwt.sign({ id: createdUser.id }, process.env.JWT_SECRET)
}