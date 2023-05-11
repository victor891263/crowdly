const express = require('express')
const router = express.Router()
const getProfileWithPosts = require('../handlers/getProfileWithPosts')
const getProfileWithFollowers = require('../handlers/getProfileWithFollowers')
const getProfileWithFollows = require('../handlers/getProfileWithFollows')
const createAccount = require('../handlers/createAccount')
const editAccount = require('../handlers/editAccount')
const deleteAccount = require('../handlers/deleteAccount')
const createFollow = require('../handlers/createFollow')
const deleteFollow = require('../handlers/deleteFollow')
const handleAccess = require('../middleware/handleAccess')


// get data about the specified profile along with posts made by that profile
router.get('/:id', getProfileWithPosts)

// get users that have followed the specified profile
router.get('/:id/followers', getProfileWithFollowers)

// get users that the specified profile has followed
router.get('/:id/follows', getProfileWithFollows)


// create a new account
router.post('/', createAccount)

// update the profile
router.put('/', handleAccess, editAccount)

// delete the profile
router.delete('/', handleAccess, deleteAccount)


// follow a user
router.post('/:id/followers', handleAccess, createFollow)

// unfollow a user
router.delete('/:id/followers', handleAccess, deleteFollow)

module.exports = router