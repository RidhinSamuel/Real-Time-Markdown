// Include express and create an object of express class
const express=require('express');
const app=express();
// set view engine as ejs
app.set('view engine','ejs')
// use bodyParser
app.use(express.urlencoded({extended:true}));
// use static files from public folder
app.use(express.static(__dirname+'/public'));
app.use(express.json());
var showdown  = require('showdown')
var converter= new showdown.Converter();
app.post('/convert',(req,res)=>{
    var markdownText=req.body.text;
    console.log(markdownText)
    var html=converter.makeHtml(markdownText);
    res.json({ htmlMarkdown:html });
});
app.get("/",(req,res)=>{
    res.render("editor",{userName:"ridhin samuel"});
});
app.get("/js/script.js",(req,res)=>{
    res.sendFile(__dirname+"/public/js/script.js");
});

//create a port
var port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
});
