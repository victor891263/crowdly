const User = require('../models/user')

module.exports = async (req, res) => {
    const accountData = req.body // new account data
    const currentUserId = req.user.id // id of currently logged in user

    // check if the new username is already present in the database
    const user = await User.findOne({
        where: { username: accountData.username }
    })

    // if the username is already taken, don't proceed
    if (user) {
        res.status(400).send('The new username you picked is already taken')
        return
    }

    // update the profile of the currently logged in user with new information
    await User.update({
        username: accountData.username,
        about: accountData.about
    }, {
        where: { id: currentUserId }
    })

    res.sendStatus(200)
}