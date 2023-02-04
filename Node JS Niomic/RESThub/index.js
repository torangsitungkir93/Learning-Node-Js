

const express = require("express");
const app = express();
const port = 8000;
const apiRouter = require("./api-routes");

app.get('/',(req,res)=>{
    res.send('Halooo,selamat anda telah berhasil membuat webserver dengan express');
});

const a = app.use("/api",apiRouter);

app.listen(port,()=> {
    console.log(`Server berjalan di port ${port}`);
});