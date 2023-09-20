const express = require('express')
const fs = require('fs')

const userControllerObj = {

    retrieveUser: async (req, res) => {
        const word = req.params.words

        fs.writeFile('./user.txt', word, (err) => {
            if (err) {
                return res.json(err)
            }
            else {
                return res.json('written')
            }

        })


    }
}

module.exports = userControllerObj;