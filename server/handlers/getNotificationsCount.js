const Notification = require('../models/notification')
const JSONSimplify = require("../utilities/JSONsimplify")

module.exports = async (req, res) => {
    const currentUserId = req.user.id

    const notis = await Notification.count({
        where: { targetUserId: currentUserId }
    })

    res.send(JSON.stringify(notis))
}