require("dotenv").config()
const express = require("express")


const app = express()

//create server
app.listen(process.env.PORT, ()=> {
    console.log("server started!")
})