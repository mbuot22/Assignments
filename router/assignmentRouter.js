const express = require('express')
const assignmentControllerObjCall = require('../controller/assignmentController')
const router = express.Router()

router.get('/createAssignment', assignmentControllerObjCall.createAssignment);

module.exports = router;