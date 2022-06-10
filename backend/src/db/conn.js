const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_ADDRESS)
.then(()=>{
    console.log('Connected with Database')
}).catch((err)=>{
    console.log('Error occured while connecting to Database');
    console.log(err.message);
})