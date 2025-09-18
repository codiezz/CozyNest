const productModel = require("./model/productModel")

exports.createProduct = async (req, res) => {

    let { product } = req.body;
    let { filename } = req.file;

    let productdata = new ProductModel({
        product,
        photo: filename
    })

    await productdata.save()
    res.status(201).json(productdata)
}