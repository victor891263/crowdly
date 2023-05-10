const User = require('../models/user')
const hash = require('../utilities/hash')

module.exports = async (req, res) => {
    const accountData = req.body

    // check if the username given by the guest is already present in the database
    const user = await User.findOne({
        where: { username: accountData.username }
    })

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
    res.send(createdUser.id)
}