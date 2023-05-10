const User = require('../models/user')

module.exports = async (req, res) => {
    const accountData = req.body // new account data
    const currentUserId = req.user.id // id of currently logged in user

    // if no user is logged in, don't update any profile!
    if (!currentUserId) {
        res.status(400).send(`You don't have permission to do this`)
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