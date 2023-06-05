const app = require('express')()
const morgan = require('morgan')

//router
const {router} = require('./routes/router')

app.use(morgan('dev'))
app.use("/api/", router)

module.exports = {app}