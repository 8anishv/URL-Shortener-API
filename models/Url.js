const mongoose = require("mongoose");

const UrlSchema = mongoose.Schema({
    urlCode : String,
    longUrl : String,
    shortUrl : String,
    date : {
        type : String,
        default : Date.now
    }
})

module.exports = mongoose.model("Url" , UrlSchema)