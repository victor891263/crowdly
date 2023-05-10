const User = require('../models/user')
const Post = require('../models/post')
const Follow = require('../models/follow')

module.exports = async (req, res) => {
    const profileId = req.query.id // id of the user/profile that the user retrieved
    const currentUserId = req.user.id // id of the currently logged in user

    // get this user's data
    const profile = await User.findOne({
        where: { id: profileId },
        attributes: ['id', 'username', 'about', 'follows', 'followers', 'createdAt', 'updatedAt']
    })

    // get posts that this user made
    const posts = await Post.findAll({
        where: { userId: profileId }
    })

    let followByCurrentUser
    let followToCurrentUser

    if (currentUserId) {
        // check if currently logged in user followed this user
        followByCurrentUser = await Follow.findOne({
            where: {
                followerId: currentUserId,
                followedId: profileId
            }
        })

        // check if currently logged in user is being followed by this user
        followToCurrentUser = await Follow.findOne({
            where: {
                followerId: profileId,
                followedId: currentUserId
            }
        })
    }

    res.send({ ...profile, posts, followed: followByCurrentUser ? true : false, followingMe: followToCurrentUser ? true : false })
}