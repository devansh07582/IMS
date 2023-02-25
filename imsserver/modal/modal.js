const mongoose = require('mongoose')

const enquirySchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true, "must provide Email Address"],
        trim:true,
        lowerCase:true,
    },
    phonenumber:{
        type:Number,
        required:true,
    },
    emailaddress:{
        type:String,
        required:true,
    },
    address :{
        city:{
            type:String,
            required:true,
            
        },
        state:{
            type:String,
            required:true,
        },
        pincode:{
            type:Number,
            required:true,
        }
    },
    qualification:{
        highest:{
            type:String,
            required:true
        },
        interest:{
            type:String,
        },
        priorcomputerknowledge:{
            type:Boolean,
            required:true

        }
    },
    query:{
        type:String,
        // required:true
    },
    dateofenquiry:{
        type:Date,
        default: Date.now 
    }
    // status: 


})

module.exports = mongoose.model('enquiry', enquirySchema)

