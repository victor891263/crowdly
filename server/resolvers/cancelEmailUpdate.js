const {GraphQLError} = require("graphql")
const User = require("../models/user")

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
    console.log('called before')
    // remove new email
    await User.update({
        newEmail: null,
        newEmailToken: null
    }, {
        where: {id: context.user.id}
    })
    console.log('called after')
    return true
}