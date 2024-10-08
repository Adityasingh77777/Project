// require('dotenv').config({path:"./env"}) 

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config(
    {
        path:'./env'
    })

connectDB()

// one method to connect to the database

/*
import express from "express"
const app=express()


(async()=>{
    try{
        await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error found:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`Server is Listening on ${process.env.PORT}`)
        })

    }

    catch(error){
        console.log("Error:",error)
        throw error
    }

})()

*/

// function connectDB() {}

// connectDB()

