const mongoose = require('mongoose');
const getShortUrl = require('./../getShortUrl');

const urlSchema=new mongoose.Schema({
    fullUrl:{
        type:String,
        require:true
    },
    shortUrl:{
        type:String,
        required:true,
        default:()=>{return getShortUrl()},
        unique: true
    },
    clicks:{
        type:Number,
        require:true,
        default:0
    }
})
module.exports=mongoose.model('UrlData',urlSchema)