const express = require('express')
const handleAccess = require("../middleware/handleAccess")
const getNotifications = require("../handlers/getNotifications")
const getNotificationsCount = require("../handlers/getNotificationsCount")
const deleteNotification = require("../handlers/deleteNotification")
const router = express.Router()

// get notifications for the currently logged in user
router.get('/', handleAccess, getNotifications)

// get only the number of notifications
router.get('/count', handleAccess, getNotificationsCount)

router.delete('/:id', handleAccess, deleteNotification)

module.exports = router