const express = require('express');
const { json } = require('express/lib/response');
require('./db/conn');
const UrlData = require('./model/UrlData');

const app=express();

const port=process.env.PORT||5000;

//for accept json data from frontend
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message:'Hello from server side'});
})


app.post('/getshorturl',async (req,res)=>{
    const urlInfo=new UrlData({
        fullUrl: req.body.url
    })
    const ack = await urlInfo.save();
    res.json('Okay');
})

app.get('/getallurl',async (req, res)=>{
    const data=await UrlData.find();
    res.json(data);
})
 
app.get('/:url',async (req,res)=>{
    try{
        const urlInfo=await UrlData.findOne({shortUrl:req.params.url});
        if(urlInfo==null) 
        console.log(urlInfo)
        urlInfo.clicks++;
        urlInfo.save()
        res.redirect(urlInfo.fullUrl);
    }catch(err){
        res.json({
            status:404, 
            message:"Error- wrong url"
        });
    }
})

app.listen(port,()=>{console.log(`running at http://localhost:${port}`)});
