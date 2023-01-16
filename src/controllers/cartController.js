const cartModel = require('../models/cartModel')

const createcart = async (req,res) =>{
    try {
        let data = req.body
        console.log(data);
  
        let cartCreated = await cartModel.create(data)
        
        return res.status(201).send({status:true, message:"user created",  data:cartCreated})
        
    } catch (error) {
       res.status(500).send({status:false, message:error.message}) 
    }
}

module.exports = {createcart}