const express = require('express');
const routers = express.Router()

const {signup, signin} = require('../controllers/usersController')

routers.route('/admin').post().get()
routers.route('/trainer').post().get()
routers.route('/student').post().get()


module.exports = routers;