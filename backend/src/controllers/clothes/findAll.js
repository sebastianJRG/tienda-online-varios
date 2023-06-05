const {Clothes} = require('../../models/Clothes')

const findAll = async () => {
    const response = await Clothes.find({})
    return response
}

module.exports = { findAll }