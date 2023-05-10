const express = require('express')
const router = express.Router()
const getPosts = require('../handlers/getPosts')

router.get('/:id', getPosts)

module.exports = router