const express = require('express')
const DbConnect = require("./config/db")
const dotenv = require("dotenv")
const route = require('./routes')
dotenv.config()
const PORT = process.env.PORT

const app = express();
app.use(express.json())

const serverStart = async () => {
    await DbConnect().then()
    try {
        
        app.get("/",(req,res,next)=> {
            res.send("new-backend")
        })
        
        app.listen(PORT,() => {
            console.log(`servar started on port  ${PORT}`);
        })

        app.use("/api",route)

    } catch (error) {
        console.log(error);
    }
}

serverStart();