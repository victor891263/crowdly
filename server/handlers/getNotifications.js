const Notification = require('../models/notification')
const JSONSimplify = require("../utilities/JSONsimplify")
const User = require("../models/user")

module.exports = async (req, res) => {
    const currentUserId = req.user.id

    const notis = await Notification.findAll({
        where: { targetUserId: currentUserId },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ],
        order: [['createdAt', 'DESC']]
    })

    res.send(JSONSimplify(notis))
}