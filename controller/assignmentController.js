const express = require('express');
const fs = require('fs');


const name = "UMOH FAITH"

const assignmentControllerObj = {

    createAssignment: async (req, res) => {
        fs.writeFile("./assignment.txt", name, (err) => {
            if (err) {
                return console.log(err)
            }
            else {
                return console.log('Assignment Created Successfully.')
            }
        })
    }
}



module.exports = assignmentControllerObj;