const mongoose = require('mongoose');
const connectDB= async()=>{
   const conn = await mongoose.connect(process.env.MONGO_URI,{
    
    // }, err => {
    // if(err) throw err;
    // console.log(`MongoDB Connected : ${conn.connection.host}`);
      
   });
   console.log(`MongoDB Connected : ${conn.connection.host}`)
}
module.exports = connectDB;
