const express = require('express')
const router = express.Router()
const Post = require('../models/post')
const User = require('../models/user')
const { Op } = require('sequelize')
const JSONSimplify = require('../utilities/JSONsimplify')

router.get('/', async (req, res) => {
    const postKeyword = req.query.post
    const usernameKeyword = req.query.username

    if (postKeyword) {
        const posts = await Post.findAll({
            where: {
                body: { [Op.iLike]: `%${postKeyword}%` }
            },
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ],
            order: [['createdAt', 'DESC']]
        })
        res.send(JSONSimplify(posts))
        return
    }

    if (usernameKeyword) {
        const profiles = await User.findAll({
            where: {
                username: { [Op.like]: `%${usernameKeyword}%` }
            },
            attributes: ['id', 'username']
        })
        res.send(JSONSimplify(profiles))
        return
    }

    res.status(400).send('Invalid input')
})

module.exports = router