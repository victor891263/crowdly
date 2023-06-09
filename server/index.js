require('dotenv').config()
const express = require('express')
require('express-async-errors')
const cors = require('cors')

// initialize api
const app = express()
app.use(cors({
    origin: ["https://crowdlyapp.netlify.app", "http://localhost:3000"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// handle errors that are not caught by anything
process.on('uncaughtException', (error, source) => {
    console.log('uncaughtException', error, source);
});

// handle promises that are rejected and not handled by anything
process.on('unhandledRejection', (error, source) => {
    console.log('unhandledRejection', error, source);
});

// test database and handle disconnection
require('./startup/initDb')()

// routes
app.use('/auth', require('./routes/auth'))
app.use('/search', require('./routes/search'))
app.use(require('./middleware/auth')) // authentication middleware
app.use('/posts', require('./routes/posts'))
app.use('/users', require('./routes/users'))
app.use('/notifications', require('./routes/notifications'))
app.use(require('./middleware/handleError'))

// begin listening
app.listen(process.env.PORT || 5000, () => console.log('API is running'))