const EnquirySchema = require('../modal/modal')



const getEnquiries = async (req,res)=>{
    console.log(req.body)
    const enquiry = await EnquirySchema.find(req.body);
    res.status(201).json({enquiry})
}

const postEnquiries = async (req,res)=>{
    console.log(req.body)
    const enquiry = await EnquirySchema.create(req.body)
    res.status(201).json({enquiry})
}

module.exports ={
    getEnquiries,
    postEnquiries
}