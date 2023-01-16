const userModel = require('../models/userModel')

const isEmpty = function(value){
    if(typeof value == 'undefined' || value == null) return false
    if(typeof value == String && value.trim().length == 0) return false
    return true
}

const nameValidation = function(name){
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name)

}
const createUser = async (req,res) =>{
    try {
        let data = req.body
        console.log(data);

        let {firstName, lastName, email, address} = data

        if(!isEmpty(data)) return res.status(400).send({status:false, message:"body can't be empty"})

        if(!isEmpty(firstName)) return res.status(400).send({status:false, message:"firstName is required"})
        if(!nameValidation(firstName)) return res.status(400).send({status:false, message:"firstName is invalid"})



        let usercreated = await userModel.create(data)
        
        return res.status(201).send({status:true, message:"user created",  data:usercreated})
        
    } catch (error) {
       res.status(500).send({status:false, message:error.message}) 
    }
}

module.exports = {createUser}