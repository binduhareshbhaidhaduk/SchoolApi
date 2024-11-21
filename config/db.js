import mongoose from "mongoose";

const  connectDB = mongoose.connect('mongodb+srv://binudhaduk1234:1o5oXUFaXVPwMDzU@cluster0.i3cen.mongodb.net/schoolApi').then((res)=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})

export default  connectDB;

