const { Router } = require('express')
const clothesRouter = Router()

const { findAll } = require('../controllers/clothes/findAll')

clothesRouter.get('/all', async (req, res)=>{
    const allClothes = await findAll()
    res.json({
        message: allClothes
    })
})

module.exports = { clothesRouter }