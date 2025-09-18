const mongoose = require("mongoose")


const productSchema = mongoose.Schema({
    product: {
        type: String,
    },

    photo: {
        type: String
    }
})

const ProductModel = new mongoose.model("products", productSchema,)

module.exports = ProductModel;