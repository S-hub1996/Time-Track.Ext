const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    startTime: {type: String},
    Endtime: {type: String},
    totalTime: {type: Number},
    Day: {type: String},
    date: {type: String},
})

const ReportModel = mongoose.model('report', reportSchema)

module.exports = ReportModel