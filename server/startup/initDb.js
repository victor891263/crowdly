const sequelize = require('../startup/db')

module.exports = () => {
    // test connection
    sequelize.authenticate()
        .then(() => console.log('Connected to db successfully.'))
        .catch(error => console.error('Failed to connect to db', error))

    // close connection to database if api stops running
    process.on('SIGINT', closeConnection)
    process.on('SIGTERM', closeConnection)

    // function to handle the closing of connection to database
    async function closeConnection() {
        try {
            await sequelize.close()
            console.log('Connection to database closed')
            process.exit(0) // this makes the api stop running
        } catch (error) {
            console.log('Failed to close connection to database', error)
            process.exit(1) // this makes the api stop running and indicate that there is an error
        }
    }
}