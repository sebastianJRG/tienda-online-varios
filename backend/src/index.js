require('dotenv').config()
const {app} = require('./app')

app.listen(process.env.PORT_SERVER, ()=>console.log(`server on port ${process.env.PORT_SERVER}`))