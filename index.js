const fs = require('fs/promises')
const express = require('express')
const cors = require('cors')

const { v4: uuid } = require('uuid')
const Routes = require('./routes/Routes')

const app = express()

const routes = express()
routes.use('/', Routes)

const port = process.env.PORT || 3000
routes.listen(port, () => {
    console.log("Server is running...")
})