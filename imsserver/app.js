const express = require('express')
const connectDb = require('./database/connect')
require("dotenv").config()
const enquiry = require('./Routes/enquiry')
const app = express()
const cors = require("cors")

app.use(cors({
    origin: "*"
}));

app.get('/', function(req, res){
    // console.log("this is res", res)
    res.send("hello world")
})

// enquiry routes
app.use(express.json())
app.use('/api/v1/',enquiry)


async function start(){
    
    try{
        await connectDb(process.env.mongouri)
        console.log("databse is connected")
        app.listen(8080,()=>{
            console.log("listening on port 8080")
        
        })

    }catch(error){
        console.log("err",error)
    }
}
start()