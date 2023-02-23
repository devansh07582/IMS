const mongoose = require("mongoose")
const connectDb =(url)=> mongoose.connect(url,{ useUnifiedTopology: true ,useNewUrlParser: true})

module.exports = connectDb