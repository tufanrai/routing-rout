const express = require('express')
const route = require('../routing-routs/router/rout.js')
const app = express()

app.use('/', route)

app.listen(8000, () => {
    console.log('server started at http://localhost:8000')
})