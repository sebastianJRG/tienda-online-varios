const { Schema, model } = require('mongoose')

const schemaClothes = Schema({
    name : String,
    price : Number,
    size : ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stock : Number
})

const Clothes = model ('Clothes', schemaClothes)

module.exports = { Clothes, schemaClothes }