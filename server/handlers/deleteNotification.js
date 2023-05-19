const Notification = require('../models/notification')

module.exports = async (req, res) => {
    const notiId = req.params.id

    await Notification.destroy({
        where: { id: notiId }
    })

    res.sendStatus(200)
}