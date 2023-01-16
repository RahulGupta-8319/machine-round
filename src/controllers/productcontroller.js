const productModel = require('../models/productModel')

const createProduct = async (req,res) =>{
    try {
        let data = req.body
        console.log(data);

        let productCreated = await productModel.create(data)
        
        return res.status(201).send({status:true, message:"user created",  data:productCreated})
        
    } catch (error) {
       res.status(500).send({status:false, message:error.message}) 
    }
}

module.exports = {createProduct}