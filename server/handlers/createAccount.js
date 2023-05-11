const User = require('../models/user')
const jwt = require('jsonwebtoken')
const hash = require('../utilities/hash')

module.exports = async (req, res) => {
    const accountData = req.body

    // check if the username given by the guest is already present in the database
    const user = await User.findOne({
        where: { username: accountData.username }
    })

    // if the username is already taken, don't proceed
    if (user) {
        res.status(400).send('The username you provided is already taken')
        return
    }

    // hash the password to make it complex and unreadable
    const hashed = await hash(accountData.password)

    // add the new user to the database
    const createdUser = await User.create({
        username: accountData.username,
        password: hashed
    })

    // create the json web token
    const token = jwt.sign({ id: createdUser.id }, process.env.JWT_SECRET)

    // send the json web token to the client
    res.send(token)
}