const User = require('../models/user')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const hash = require('../utilities/hash')
const {GraphQLError} = require("graphql")
const sendEmail = require("../utilities/sendEmail")

module.exports = async (_, args, context) => {
    const userData = args.input

    // check if the email provided by the guest is already present in the database. If it is, don't proceed
    const usersWithEmail = await User.count({
        where: { email: userData.email }
    })
    if (usersWithEmail > 0) {
        throw new GraphQLError(`An account with a given email already exists`, {
            extensions: {
                http: {
                    status: 400
                }
            }
        })
    }

    // check if the username given by the guest is already present in the database. If it is, don't proceed
    const usersWithUsername = await User.count({
        where: { username: userData.username }
    })
    if (usersWithUsername > 0) {
        throw new GraphQLError(`The username you provided is already taken`, {
            extensions: {
                http: {
                    status: 400
                }
            }
        })
    }

    // hash the password to make it complex and unreadable
    const hashedPassword = await hash(userData.password)

    // generate a 64-character long random string
    const verificationToken = crypto.randomBytes(32).toString('hex')

    // add the new user to the database
    const createdUser = await User.create({
        email: userData.email,
        username: userData.username,
        password: hashedPassword,
        emailToken: verificationToken
    })

    // send an email to the email address provided by the user
    await sendEmail(userData.email, verificationToken, 'account')

    // create the json web token and send it to the client
    return jwt.sign({
        id: createdUser.id,
        isVerified: false // new users are always unverified
    }, process.env.JWT_SECRET)
}