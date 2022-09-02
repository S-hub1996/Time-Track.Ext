const mongoose = require("mongoose")

const mongodb_url =  "mongodb+srv://soumyahakke:soumya1234@cluster0.spwxguu.mongodb.net/timer?retryWrites=true&w=majority"

// "mongodb://localhost:27017/timer"

const connection = mongoose.connect(mongodb_url) ////// add collection name

module.exports = connection;