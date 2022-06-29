const express = require('express')
const Routes = require('./routes/Routes')

const app = express()
app.use('/', Routes)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Server is running...")
})