const Fruits = require("../controller/fruitsController")

const express = require("express")
const route = express.Router()

route.post("/fruits",Fruits);

module.exports = route