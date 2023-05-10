const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')

// ssl certificate
const ssl = fs.readFileSync(path.resolve(__dirname, '../ssl.crt'))

// connect to database
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            ca: ssl, // path to the ssl certificate file
        }
    }
})

module.exports = sequelize