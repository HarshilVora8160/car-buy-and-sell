const mongoose = require("mongoose");

const fruitsSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    discount:{
        type:String,
        required:true
    },
    stock:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
})

const fruitModel = mongoose.model("fruits",fruitsSchema)

module.exports = fruitModel