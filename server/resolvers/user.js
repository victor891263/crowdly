const User = require('../models/user')
const Follow = require('../models/follow')
const JSONSimplify = require("../utilities/JSONsimplify")
const {GraphQLError} = require("graphql")

module.exports = async (_, args, context) => {
    const profileId = args.id // id of the user/profile that the user retrieved
    const currentUserId = context.user && context.user.id // id of the currently logged in user

    // get this user's data
    const profile = await User.findOne({
        where: { id: profileId },
        attributes: {
            exclude: ['password', 'resetToken', 'emailToken', 'newEmailToken']
        }
    })

    // if a user with the given id doesn't exist, tell that to the client, instead of proceeding
    if (!profile) {
        throw new GraphQLError(`The profile you're trying to view doesn't exist`, {
            extensions: {
                http: {
                    status: 404
                }
            }
        })
    }

    const followByCurrentUser = currentUserId && await Follow.findOne({
        where: {
            followerId: currentUserId,
            followedId: profileId
        }
    })
    const followToCurrentUser = currentUserId && await Follow.findOne({
        where: {
            followerId: profileId,
            followedId: currentUserId
        }
    })

    return {
        ...JSONSimplify(profile),
        followed: !!followByCurrentUser,
        followingMe: !!followToCurrentUser
    }
}