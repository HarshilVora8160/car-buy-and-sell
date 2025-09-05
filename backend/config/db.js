const mongoose = require("express");

const DbConnect = async () => {
  try {
      await mongoose.connect('mongodb://127.0.0.1:27017/test')
      .then(()=>console.log("hello eve"))
    } catch (error) {
      console.log("mongoDb connected successfully!");
    }
}

module.exports = DbConnect