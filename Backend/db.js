const mongoose = require("mongoose")

const mongodb_url =  "mongodb://localhost:27017/timer"

const connection = mongoose.connect(mongodb_url) ////// add collection name

module.exports = connection;