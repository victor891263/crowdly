const bcrypt = require('bcrypt')

module.exports = async (item) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(item, salt)
}