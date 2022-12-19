const mongoose = require('mongoose')
require('dotenv').config()

const MongoDB = process.env.MongoDB_URI

function connectMongoDB(){
    mongoose.connect(MongoDB)

    mongoose.connection.on('connected', ()=>{
        console.log('MongoDb connected successfully')
    })

    mongoose.connection.on('error', (error)=>{
        console.log('error connecting to mongoDB', error)
    })
}

module.exports = {connectMongoDB}