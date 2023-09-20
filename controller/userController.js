const express = require('express')
const fs = require('fs')


const userControllerObj = {

    createUser: async (req, res) => {
        const word = req.params.words

        fs.writeFile('./user.txt', word, (err) => {
            if (err) {
                return res.json(err)
            }
            else {
                return res.json('written')
                // return console.log('User retrieved')
            }

        })
    },

    updateUser: async (req, res) => {
        fs.readFile('./user.txt', 'utf-8', (err,data) => {
            if (err) {
                return res.status(500).send(err)
            }
            else{
                return res.status(200).send(data)
                // return res.json(JSON.parse(data))
            }
        })

    },

    addUser: async (req, res) => {
        fs.appendFile('./user.txt', " World", (err) => {
            if (err) {
                //comment
                return (err)
            }
            else {
                return res.json('Updated')
            }
        })
    }
}

module.exports = userControllerObj;