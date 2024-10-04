const express = require("express")
const app = express()
const todoRoutes = require("./routes/todoRoutes")
const cors = require("cors")
const DB = require("./DBconfig")
require("dotenv").config()

DB()

app.listen(3000,()=>{
    console.log("server is running on 3000");
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/",todoRoutes)
