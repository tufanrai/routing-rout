const express = require('express')
const route = require('../routing-routs/router/rout.js') // accessing the router 
const app = express()

app.use('/', route) // appling the router level request responce handling

app.listen(8000, () => {
    console.log('server started at http://localhost:8000')
})