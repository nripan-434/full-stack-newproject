import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/userRoutes.js'
import connectDB from './mongodb.js'
const app=express()
app.use(express.json())
app.use(userRouter,'/api/users')
dotenv.config()
app.listen(process.env.PORT,()=>{
    console.log("server is running")
})



connectDB()
