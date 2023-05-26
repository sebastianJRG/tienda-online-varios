const app = require('express')()

//router
const {router} = require('./routes/router')

app.use("/api/", router)

module.exports = {app}