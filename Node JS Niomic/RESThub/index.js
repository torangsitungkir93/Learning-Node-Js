
// Import EXpress

const express = require("express");

// import mongoose
const mongoose = require("mongoose");
// Inisiasi express sebagai app
const app = express();
// Setting port
// import body-parser

// Import module api route
const apiRouter = require("./api-routes");
const bodyParser = require("express");
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());
//Connect to mongodb
mongoose.connect('mongodb://localhost/resthub');
const db = mongoose.connection;
const port = 8000;
// api route ke url /api
app.use("/api",apiRouter);

// Setup default url di root
app.get('/',(req,res)=>{
    res.send('Halooo,selamat anda telah berhasil membuat webserver dengan express dan nodemon');
});

//lainch app with info at console log
app.listen(port,()=> {
    console.log(`Server berjalan di port ${port}`);
});