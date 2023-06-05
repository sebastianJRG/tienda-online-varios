const { Schema, model } = require('mongoose')
const { schemaClothes } = require('./Clothes')
const { schemaPerfume } = require('./Perfume')

const schemaUser = Schema({
    username : String,
    gmail : String,
    password : String,
    clothesCart : [schemaClothes],
    perfumeCart : [schemaPerfume]
})

const User = model ('User', schemaUser)

module.exports = { User, schemaUser }