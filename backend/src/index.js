require('dotenv').config()
const {app} = require('./app')
const {connection} = require('./connection')

connection()
    .then(()=> app.listen(process.env.PORT_SERVER, ()=>console.log(`server on port ${process.env.PORT_SERVER}`)) )
    .catch(err=> console.log(err))