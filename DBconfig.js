const mongoose = require("mongoose")

const connectDb = ()=>{
    try{
       mongoose.connect(process.env.DB_URL)
       console.log("mongodb connected");  
    }catch(err){
       console.log(ree.message)
    }
}

module.exports = connectDb