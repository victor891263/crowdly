const User = require('../models/user')
const Follow = require('../models/follow')
const JSONSimplify = require("../utilities/JSONsimplify");

module.exports = async (req, res) => {
    const profileId = req.params.id // id of the user/profile that the user retrieved
    const currentUserId = req.user.id // id of the currently logged in user

    // get this user's data
    const profile = await User.findOne({
        where: { id: profileId },
        attributes: ['id', 'username', 'about', 'follows', 'followers', 'createdAt', 'updatedAt']
    })

    // if a user with the given id doesn't exist, tell that to the client, instead of proceeding
    if (!profile) {
        res.status(404).send(`The profile you're trying to view doesn't exist`)
        return
    }

    let followByCurrentUser
    let followToCurrentUser
    console.log(currentUserId, profileId)
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

        console.log(followByCurrentUser)
        console.log(followToCurrentUser)
        console.log(currentUserId, profileId)
    }



    res.send({ ...JSONSimplify(profile), followed: followByCurrentUser ? true : false, followingMe: followToCurrentUser ? true : false })
}