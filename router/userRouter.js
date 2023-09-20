const express = require('express')
const userControllerObjCall = require('../controller/userController')
const router = express.Router()

router.get('/retrieveUser/:words', userControllerObjCall.retrieveUser)

module.exports = router;