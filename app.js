// Basic Lib Import
const express=require('express');
const router=require('./src/route/api');
const app=new express();

//security middleware
const rateLimit=require('express-rate-limit')
const helmet=require('helmet');
const hpp=require('hpp');
const cors=require('cors');
const bodyParser=require('body-parser');
const expressmongosanitize=require('express-mongo-sanitize')
const xssclean=require('xss-clean')

//database configuraiton
const mongoose=require('mongoose')


// security middleware implemet

app.use(cors());
app.use(helmet())
app.use(hpp())
app.use(expressmongosanitize())
app.use(xssclean());
app.use(express.json({limit:'20mb'}))
app.use(express.urlencoded({extended:true}));



//rate limit settings
let limiter=rateLimit({windowMs:15*60*1000,max:3000});
app.use(limiter);


//body parser implemet 
app.use(bodyParser.json());



//Database Connection
let URL="mongodb://127.0.0.1:27017/todo"
let OPTION={user:"",pass:""}
mongoose.connect(URL,OPTION).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})


// Route Implement
app.use("/api/v1",router);

// 404 Not Found Implement
app.use("*",(req,res)=>{
    res.status(404).json({data:"Not found"})
})

module.exports=app;



















