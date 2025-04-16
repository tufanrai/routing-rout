const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('this is a home page')
})

router.get('/users', (req,res) => {
    res.send('this is a users page')
})

router.get('/users/:id', (req,res) => {
    res.send(`this is a page of a user having id ${req.params.id}`)
})

module.exports = router