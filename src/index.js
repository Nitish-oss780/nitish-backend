
import dotenv from "dotenv"
import mongoose from "mongoose";

import { DB_NAME } from "./constant";
import connectDB from "./db/index";


dotenv.config({
    path:'./env'
})

connectDB()
.then(() =>{
    app.Listen(process.env.PORT || 8000 , ()=>{
        console.log(`server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) =>{
   console.log("MONGO db connection failed !!!",err) 
})

// ( async()=>{
//    try{
//     await mongoose.connect(`${process.env.MONGODB_URI}/$
//     {DB_NAME}`)
//    }
//    catch(error){
//     console.error("ERROR:",error)
//     throw error;
//    }
// })()