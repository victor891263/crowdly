const Follow = require("../models/follow")
const User = require("../models/user")
const Post = require("../models/post")
const JSONSimplify = require("../utilities/JSONsimplify")
const { GraphQLError } = require("graphql")

module.exports = async (_, __, context) => {
    // deny access if no user is logged in
    if (!context.user) {
        throw new GraphQLError(`You don't have permission to do this`, {
            extensions: {
                http: {
                    status: 400
                }
            }
        })
    }

    const currentUserId = context.user.id // id of currently logged in user

    // retrieve rows from 'Follow' table where 'followerId' property has the same value as 'currentUserId' variable
    const followedUsers = await Follow.findAll({
        where: { followerId: currentUserId }
    })

    // extract the followedIds from the resulting array from the above query
    const followedUsersIds = followedUsers.map(row => row.followedId)
    followedUsersIds.push(currentUserId) // add posts of the currently logged in user

    // retrieve posts where 'userId' property's value is included in the 'followedUsersIds' array. Then, for 'userId' in each row, search for rows in 'User' whose 'id' has the same value and then retrieve 'username' from the same row. Finally, order the query results by 'createdAt' property, which the most recent ones appearing first
    const posts = await Post.findAll({
        where: { userId: followedUsersIds, repliedId: null },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ],
        order: [['createdAt', 'DESC']]
    })

    return JSONSimplify(posts)
}