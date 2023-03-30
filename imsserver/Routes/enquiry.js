const express = require('express');
const {getEnquiries,postEnquiries,patchEnquiries} = require('../controllers/enquirycontrollers'); 
const routers  = express.Router();

routers.route('/enquires').get(getEnquiries).post(postEnquiries)
routers.route('/enquires/:id').patch(patchEnquiries)
module.exports = routers;