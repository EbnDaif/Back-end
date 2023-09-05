const express = require("express");
const mongoose=require('mongoose')
require('dotenv').config()
const userrouter = require("./routers/user.routers");
const url = process.env.DB_URL
const app = express();
const port = process.env.port || 3000;
const cookieparser = require('cookie-parser')

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{console.log('Connected ')}).catch(()=>{console.log(error.message)})

const authrouters=require('./routers/auth.routers')
app.use(express.json());
app.use(cookieparser())
app.use(userrouter);
app.use('/auth',authrouters)
app.listen(port, () => console.log("Here We Go "));
