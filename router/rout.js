const express = require('express')
const router = express.Router() // invoking the router form the express

router.get('/', (req,res) => { // handles the requests of the users in the home page
    res.send('this is a home page')
})

router.get('/users', (req,res) => { // handles the requiest of the users in the users page
    res.send('this is a users page')
})

router.get('/users/:id', (req,res) => { // helps users to find the data with its' id
    res.send(`this is a page of a user having id ${req.params.id}`)
})

router.get('/*e', (req,res) => { // handles the file not found section
    res.status(404).send('the page you are looking for is not found')
})

module.exports = router // exporting the router