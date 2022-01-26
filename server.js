const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');
const controller = require('./server/controller/controller');
app.set('view engine',"ejs");

connectDB();
app.use(bodyparser.urlencoded({extended:true}));
app.use('/css', express.static(path.resolve(__dirname,"assets/css")));
app.use('/js', express.static(path.resolve(__dirname,"assets/js")));
app.use('/img', express.static(path.resolve(__dirname,"assets/img")));
app.use('/', require('./server/routes/router'));

app.listen(3000,()=>{console.log("Server is running")});
