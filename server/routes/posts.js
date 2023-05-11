const express = require('express')
const router = express.Router()
const getPostsForFeed = require('../handlers/getPostsForFeed')
const getTrendingPosts = require('../handlers/getTrendingPosts')
const getPost = require('../handlers/getPost')
const createPost = require('../handlers/createPost')
const editPost = require('../handlers/editPost')
const deletePost = require('../handlers/deletePost')
const createLike = require('../handlers/createLike')
const deleteLike = require('../handlers/deleteLike')
const createDislike = require('../handlers/createDislike')
const deleteDislike = require('../handlers/deleteDislike')
const handleAccess = require('../middleware/handleAccess')

// get the feed for the user
router.get('/feed', handleAccess, getPostsForFeed)

// get all posts and order them based on the sum total of likes, dislikes, and replies - the post whose sum of likes, dislikes, and replies is the largest comes first and so on
router.get('/trending', getTrendingPosts)


// get a single post
router.get('/:id', getPost)

// create a new post OR a new post as a reply
router.post('/', handleAccess, createPost)

// edit an already existing post
router.put('/:id', handleAccess, editPost)

// delete an already existing post
router.delete('/:id', handleAccess, deletePost)


// like a post
router.post('/:id/likes', handleAccess, createLike)

// remove the like from a post
router.delete('/:id/likes', handleAccess, deleteLike)


// dislike a post
router.post('/:id/dislikes', handleAccess, createDislike)

// remove the dislike from a post
router.delete('/:id/dislikes', handleAccess, deleteDislike)


module.exports = router