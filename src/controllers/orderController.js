const orderModel = require('../models/orderModel')

const createOrder = async (req,res) =>{
    try {
        let data = req.body
        console.log(data);
  
        let orderCreated = await orderModel.create(data)
        
        return res.status(201).send({status:true, message:"user created",  data:orderCreated})
        
    } catch (error) {
       res.status(500).send({status:false, message:error.message}) 
    }
}

module.exports = {createOrder}