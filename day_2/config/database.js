const mongoose = require('mongoose');
require('dotenv').config();// iski wjh se process obj kai andr saara
//  env ka code  aa jata hai
const mydb=()=>{
    mongoose.coonect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(() => {
        console.log("Database connected");
    }).catch((err) => {
        console.log("Database connection error: ", err);
        exit(1);
    });
}
//exported the db connection function.
module.exports=mydb;
