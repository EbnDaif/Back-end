const express = require("express");
require("./db/mongoose");
const userrouter = require("./routers/user.routers");
const app = express();
const port = process.env.port || 3000;
const authrouters=require('./routers/auth.routers')
app.use(express.json());
app.use(userrouter);
app.use('/auth',authrouters)
app.listen(port, () => console.log("Here We Go "));
