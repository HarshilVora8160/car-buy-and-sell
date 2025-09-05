const fruitModel = require("../models/fruitsModel")

const Fruits = async (req,res,next) => {
    console.log("req.body----------------------",req.body);
    return await res.json(req.body)
}

module.exports = Fruits 