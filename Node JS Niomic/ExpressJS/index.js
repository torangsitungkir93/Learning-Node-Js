
const express = require('express');
const app = express();
const port = 8000;


app.get('/',(req,res)=>{
    res.send('Halooo, selamat anda telah berhasil membuat webserver dengan express');
});

app.get('/user',(req,res)=>{
    res.send('Request Read Masuk');
});

app.post('/user',(req,res)=>{
    res.send('Request Read Masuk');
});

app.put('/user',(req,res)=>{
    res.send(
        "Request Put Masuk"
    );
});

app.delete('/user',(req,res)=>{
    res.send(
        "Request Delete Masuk"
    );
});

app.listen(port,() => {
    console.log(`Server berjalan di port ${port}`);
});