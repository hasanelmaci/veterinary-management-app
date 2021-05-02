const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message:{
        type:String,
        trim:true
    },
    author:{
        type:String,
        trim:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    room:{
        type:mongoose.Schema.Types.ObjectId,
        reqired:true,
        ref:"Room"
    }
},{
    timestamps:true
})

const Message = mongoose.model("Message",messageSchema);

module.exports = Message;