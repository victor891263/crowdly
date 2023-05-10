const Follow = require("../models/follow")
const User = require("../models/user")
const Post = require("../models/post")

module.exports = async (req, res) => {
    if (!req.user.id) {
        res.status(400).send('Unable to verify your identity')
        return
    }

    const currentUserId = req.user.id // the user that is logged in now

    // retrieve rows from 'Follow' table where 'followerId' property has the same value as 'currentUserId' variable
    const followedUsers = await Follow.findAll({
        where: { followerId: currentUserId }
    })

    // extract the followedIds from the resulting array from the above query
    const followedUsersIds = followedUsers.map(row => row.followedId)

    // retrieve posts where 'userId' property's value is included in the 'followedUsersIds' array. Then, for 'userId' in each row, search for rows in 'User' whose 'id' has the same value and then retrieve 'username' from the same row. Finally, order the query results by 'createdAt' property, which the most recent ones appearing first
    const posts = await Post.findAll({
        where: { userId: followedUsersIds },
        include: [
            {
                model: User,
                attributes: ['username'],
            },
        ],
        order: [['createdAt', 'DESC']]
    })

    res.send(JSON.stringify(posts, null, 2))
}