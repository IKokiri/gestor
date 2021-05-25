const express = require('express')
const app = express()
const userApi = require('./src/User/api');

var cors = require('cors');

require('dotenv').config()

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('acelerapet', 'root', '', {
    dialect: 'mysql',    
    dialectOptions: {
    }
  })

const port = process.env.PORT

app.use('/',cors(),express.json(),
userApi
                    );

app.listen(port, () => {console.log(port)})