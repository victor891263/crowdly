const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = async (_, args, context) => {
    const { id, password } = args

    // hash the password to make it complex and unreadable
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // update the password
    await User.update({
        password: hashedPassword,
        resetToken: undefined
    }, {
        where: { resetToken: id }
    })

    return true
}