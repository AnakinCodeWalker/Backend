const mongoose = require('mongoose');
const todoschema =new mongoose.Schema({
title:{
    type:String,
    required:true,
    maxLength:100,
},
    createdAt:{
        type:Date,
    required:true,
    default:Date.now(),
},
description:{
    type:String,
    required:true,
    maxLength:500,
},
updatedAt:{
type:Date,
required:true,
default:Date.now(),
}
});


//exporting it for use in other files
module.export=mongoose.model("todo",todoschema);
//is code ko ache se samajh lo. 
