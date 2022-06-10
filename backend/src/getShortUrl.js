const getShortUrl=()=>{
    let shortUrl="";
    for(let i=0; i<7; i++){
        shortUrl+=String.fromCharCode(97+Math.random()*25);
    }
    return shortUrl;
}
 module.exports=getShortUrl;