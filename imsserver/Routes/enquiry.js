const express = require('express');
const {getEnquiries,postEnquiries} = require('../controllers/enquirycontrollers'); 
const routers  = express.Router();

routers.route('/enquires').get(getEnquiries).post(postEnquiries)
module.exports = routers;