const express = require("express");
const app = express();
const port = 8080;
const apiRouter = require("./DataSiswa");

app.get('/',(req,res)=>{
    res.send('Halooo,selamat anda telah berhasil membuat webserver dengan express');
});

const a = app.use("/DataSiswa",apiRouter);

app.listen(port,()=> {
    console.log(`Server berjalan di port ${port}`);
});