const express = require('express')
const router = express.Router()
const getProfileWithPosts = require('../handlers/getProfileWithPosts')
const getProfileWithFollowers = require('../handlers/getProfileWithFollowers')
const getProfileWithFollows = require('../handlers/getProfileWithFollows')
const createAccount = require('../handlers/createAccount')
const editProfile = require('../handlers/editProfile')

// get data about the specified profile along with posts made by that profile
router.get('/:id', getProfileWithPosts)

// get users that have followed the specified profile
router.get('/:id/followers', getProfileWithFollowers)

// get users that the specified profile has followed
router.get('/:id/follows', getProfileWithFollows)

// create a new account
router.post('/', createAccount)

// update the profile
router.put('/', editProfile)

module.exports = router