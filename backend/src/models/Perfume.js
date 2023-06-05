const { Schema, model } = require('mongoose')

const schemaPerfume = Schema({
    name : String,
    price : Float32Array,
    stock : Number
})

const Perfume = model ('Perfume', schemaPerfume)

module.exports = { Perfume, schemaPerfume }