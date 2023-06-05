const { Router } = require('express')
const router = Router()

const { clothesRouter } = require('./clothesRouter')

router.use('/clothes', clothesRouter)

module.exports = {router}