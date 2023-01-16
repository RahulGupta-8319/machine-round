const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/route')
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://rahul:rahul123@cluster0.ghayzlv.mongodb.net/machine",{
    useNewUrlParser : true
})
.then( () => console.log('mongoDB in connected'))
.catch( (e) => console.log(e))

app.use('/', route)

// app.use('/*' ,  (req,res)=>{
//     res.send('path not found')
// })

app.listen(3000, ()=> console.log('server running'))