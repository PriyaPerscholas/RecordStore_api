const mongoose = require('mongoose')
const recordSchema = new mongoose.Schema({
       artist: String,
       albumtitle: String,
       coverart: String,
       year: Number,
       genre: String
})
const Records = mongoose.model('Record', recordSchema)
module.exports = Records;