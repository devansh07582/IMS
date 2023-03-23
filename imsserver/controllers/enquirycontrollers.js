const EnquirySchema = require('../modal/modal')



const getEnquiries = async (req,res)=>{
    console.log(req.body)
    const enquiry = await EnquirySchema.find(req.body);
    res.status(201).json({enquiry})
}

const postEnquiries = async (req,res)=>{
    console.log(req.body)
    try{
        const enquiry = await EnquirySchema.create(req.body)

    }catch{
    res.status(201).json({enquiry})}
}



const patchEnquiries = async(req,res)=>{
let{id:enquiryId} = req.params;
console.log(enquiryId);
const updatedEnquiry = await EnquirySchema.findByIdAndUpdate(enquiryId,req.body,{
    new:true,
    runValidators:true,
    useFindAndModify : false
})
res.status(201).json({updatedEnquiry})

}


module.exports ={
    getEnquiries,
    postEnquiries,
    patchEnquiries
}