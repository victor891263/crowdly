const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {GraphQLError} = require("graphql")

module.exports = async (_, args, context) => {
    const userData = args.input // username and password that the guest gave

    // check if the given username exists in the database. If it doesn't, don't proceed
    const user = await User.findOne({
        where: { username: userData.username }
    })
    if (!user) {
        throw new GraphQLError(`Invalid username or password`, {
            extensions: {
                http: {
                    status: 400
                }
            }
        })
    }

    // check if the given password matches with the one in the database. If it doesn't, don't proceed
    const isPasswordValid = await bcrypt.compare(userData.password, user.password)
    if (!isPasswordValid) {
        throw new GraphQLError(`Invalid username or password`, {
            extensions: {
                http: {
                    status: 400
                }
            }
        })
    }

    // create the json web token and send it to the client
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET)
}