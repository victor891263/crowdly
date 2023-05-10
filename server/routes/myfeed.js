const express = require('express')
const router = express.Router()
const getMyFeed = require('../handlers/getMyFeed')

router.get('/', getMyFeed)

module.exports = router