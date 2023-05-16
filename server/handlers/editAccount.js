const User = require('../models/user')

module.exports = async (req, res) => {
    const accountData = req.body // new account data
    const currentUserId = req.user.id // id of currently logged in user

    console.log(req.body)
    console.log('The id of the current user is:', currentUserId)

    // update the profile of the currently logged in user with new information
    const response = await User.update({
        username: accountData.username,
        about: accountData.about
    }, {
        where: { id: currentUserId }
    })

    console.log('Response by the database after updating is:', response)
    res.sendStatus(200)
}