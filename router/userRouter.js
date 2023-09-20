const express = require('express')
const userControllerObjCall = require('../controller/userController')
const router = express.Router()

router.post('/createUser/:words', userControllerObjCall.createUser)
router.get('/updateUser', userControllerObjCall.updateUser)
router.get('/addUser', userControllerObjCall.addUser)

module.exports = router;