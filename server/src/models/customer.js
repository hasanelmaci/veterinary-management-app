const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps:true
    }
)