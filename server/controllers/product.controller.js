const Product = require('../models/product.model');
module.exports.index = (req, res) => {
    res.json({
        message: "product form"
    })
}

// create a product in db
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

// find all products
module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => {
            console.log(products);
            res.json(products)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}
// get one product and its details
module.exports.getProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then(product => res.json(product))
    .catch(err => res.json(err));
}

//update an existing product
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.json(err))
}

// delete a product
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err))
}