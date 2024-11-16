const express = require('express')
const mongoose = require('mongoose');

const connectDb = async()=>{
    await mongoose.connect("mongodb+srv://samiullahglotar420:rM3d5KytY4hnMOmt@test.jih6sdq.mongodb.net/Sample?retryWrites=true&w=majority&appName=test")
    console.log("Server is successfully connected")
}


const app = express();

app.listen(3000,async()=> {
    await connectDb();
    console.log("Server is running")
})

const student = new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
});

const Student = new mongoose.model("test",student)
const adder = async()=>{
    const ss = await Student.create(
        {
           name:"SAMI",
           workout:true,
           height:6 
        })

}

adder();
