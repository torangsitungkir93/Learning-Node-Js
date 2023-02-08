
// Import EXpress

const express = require("express");

// import mongoose
const mongoose = require("mongoose");
// Inisiasi express sebagai app
const app = express();
// Setting port
// import body-parser
const port = 8000;
// Import module api route
const apiRouter = require("./api-routes");
const bodyParser = require("express");
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());
//Connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/resthub').then(() => console.log('Connected!'));;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));
      db.once('open', function(){
        console.log('db connection open');
      });

// Setup default url di root
app.get('/',(req,res)=>{
    res.send('Halooo,selamat anda telah berhasil membuat webserver dengan express dan nodemon');
});

// api route ke url /api
app.use("/api",apiRouter);

//lainch app with info at console log
app.listen(port,()=> {
    console.log(`Server berjalan di port ${port}`);
});