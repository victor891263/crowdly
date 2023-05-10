const express = require('express')
const router = express.Router()
const getTrending = require('../handlers/getTrending')

// get all posts and order them based on the sum total of likes, dislikes, and replies - the post whose sum of likes, dislikes, and replies is the largest comes first and so on
router.get('/', getTrending)

module.exports = router