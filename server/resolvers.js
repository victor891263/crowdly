const sendRecoveryInstructions = require('./resolvers/sendRecoveryInstructions')
const resetAccount = require('./resolvers/resetAccount')
const verifyUser = require('./resolvers/verifyUser')
const verifyNewEmail = require('./resolvers/verifyNewEmail')
const login = require('./resolvers/login')
const feed = require('./resolvers/feed')
const trending = require('./resolvers/trending')
const posts = require('./resolvers/posts')
const postsByUser = require('./resolvers/postsByUser')
const post = require('./resolvers/post')
const users = require('./resolvers/users')
const user = require('./resolvers/user')
const following = require('./resolvers/following')
const followers = require('./resolvers/followers')
const notifications = require('./resolvers/notifications')
const repliedPosts = require('./resolvers/repliedPosts')
const addUser = require('./resolvers/addUser')
const followUser = require('./resolvers/followUser')
const addPost = require('./resolvers/addPost')
const likePost = require('./resolvers/likePost')
const dislikePost = require('./resolvers/dislikePost')
const cancelEmailUpdate = require('./resolvers/cancelEmailUpdate')
const editUser = require('./resolvers/editUser')
const editUserEmail = require('./resolvers/editUserEmail')
const editUserPassword = require('./resolvers/editUserPassword')
const editPost = require('./resolvers/editPost')
const deleteUser = require('./resolvers/deleteUser')
const deletePost = require('./resolvers/deletePost')
const deleteLike = require('./resolvers/deleteLike')
const deleteDislike = require('./resolvers/deleteDislike')
const unfollow = require('./resolvers/unfollow')
const deleteNotification = require('./resolvers/deleteNotification')
const userSmall = require('./resolvers/userSmall')

module.exports = {
    Query: {
        verifyUser,
        verifyNewEmail,
        feed,
        trending,
        posts,
        postsByUser,
        post,
        users,
        user,
        following,
        followers,
        notifications
    },
    Post: {
        User: userSmall,
        repliedPosts
    },
    Notification: {
        User: userSmall
    },
    Mutation: {
        sendRecoveryInstructions,
        resetAccount,
        login,
        addUser,
        followUser,
        addPost,
        likePost,
        dislikePost,
        cancelEmailUpdate,
        editUser,
        editUserEmail,
        editUserPassword,
        editPost,
        deleteUser,
        deletePost,
        deleteLike,
        deleteDislike,
        unfollow,
        deleteNotification
    }
}