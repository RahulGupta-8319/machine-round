const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')
const productController = require('../controllers/productcontroller')
const cartController = require('../controllers/cartController')
const orderController = require('../controllers/orderController')


router.get('/ping', (req,res)=>{
    res.send('pong')
})

router.post("/createUser", userController.createUser )
router.post('/createProduct', productController.createProduct)
router.post('/createCart', cartController.createcart)
router.post('/createOrder', orderController.createOrder)



module.exports = router

