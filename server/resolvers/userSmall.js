const User = require("../models/user")
const JSONSimplify = require("../utilities/JSONsimplify")

module.exports = async (parent, args, context) => {
    const userId = parent.userId

    const user = await User.findOne({
        where: { id: userId },
        attributes: ['id', 'username']
    })

    return JSONSimplify(user)
}