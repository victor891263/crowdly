require('dotenv').config()
const express = require('express')

// initialize api
const app = express()

// test database and handle disconnection
require('./startup/initDb')()

// routes
app.use(require('./middleware/auth')) // authentication middleware
// get routes
app.use('/trending', require('./routes/trending'))
app.use('/posts', require('./routes/posts'))
app.use('/users', require('./routes/users'))
app.use('/myfeed', require('./routes/myfeed'))
// post routes

// begin listening
app.listen(process.env.PORT || 5000, () => console.log('API is running'))