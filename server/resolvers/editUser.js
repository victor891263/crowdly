const User = require('../models/user')
const {GraphQLError} = require("graphql")
const {v2: cloudinary} = require("cloudinary")
const JSONSimplify = require("../utilities/JSONsimplify")

module.exports = async (_, args, context) => {

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

    const newUserData = args.input // new account data
    const newImg = args.newImg
    const currentUserId = context.user.id // id of currently logged in user

    // check if the new username is already present in the database
    const user = await User.findOne({
        where: { username: newUserData.username }
    })

    // if the username already belongs to the currently logged in user (that is - they didn't change the username), dont send an error. Otherwise, send an error
    if (user && (user.id !== currentUserId)) {
        throw new GraphQLError(`The new username you picked is already taken`, {
            extensions: {
                http: {
                    status: 400
                }
            }
        })
    }

    // this will be the url of the image the user uploaded. If nothing is uploaded, this will be empty
    let newImgUrl

    // if user uploaded an image
    if (newImg) {
        // if the user already has a profile image, delete it
        if (newUserData.image) {
            const publicId = newUserData.image.match(/\/([^/]+)\.[a-zA-Z0-9]+$/)[1] // extract the public id from the image url
            await cloudinary.uploader.destroy(publicId)
        }

        // upload the image
        const response = await cloudinary.uploader.upload(newImg)
        newImgUrl = response.secure_url
    }

    // update the profile of the currently logged in user with new information
    const newUser = await User.update({
        username: newUserData.username,
        name: newUserData.name,
        about: newUserData.about,
        link: newUserData.link,
        image: newImgUrl
    }, {
        where: { id: currentUserId },
        returning: true
    })

    return JSONSimplify(newUser[1][0])
}