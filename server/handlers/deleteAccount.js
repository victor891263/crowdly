const User = require('../models/user')

module.exports = async (req, res) => {
    const currentUserId = req.user.id // id of currently logged in user

    // delete the account with the same id as that of the currently logged in user
    await User.destroy({
        where: { id: currentUserId }
    })

    res.sendStatus(200)
}