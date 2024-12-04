// Include express and create an object of express class
const express=require('express');
const app=express();
// set view engine as ejs
app.set('view engine','ejs')
// use bodyParser
app.use(express.urlencoded({extended:true}));
// use static files from public folder
app.use(express.static(__dirname+'/public'));

app.get("/",(req,res)=>{
    res.render("test",{userName:"ridhin samuel"});
});
//create a port
var port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
});
