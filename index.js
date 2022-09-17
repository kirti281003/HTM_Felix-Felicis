const express=require("express");
const app=express();
const path=require("path");
app.use(express.static("public"));
app.get("/",function(req,res)
{
    res.sendFile(path.join(__dirname+'/index.html'));
})
app.get("/about",function(req,res)
{
    res.sendFile(path.join(__dirname+'/about.html'));
})
app.listen(3000,function()
{
    console.log("Port 3000");
});