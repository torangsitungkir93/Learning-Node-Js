const http = require('http');
const fs = require('fs');

const port = 3000;

http.createServer((req, res) => {

    // Untuk mendapatkan urlnya
    const url = req.url;
    console.log(url);
    if(url === '/about'){
         // Menampilkan halaman About
         fs.readFile('./about.html',(err,data)=>{
            if(err){
                res.writeHead(404);
                res.write('Error:file not found');
            }else{
                res.write(data);
            }
            res.end();
        }); 
    }else if(url === '/contact'){
        res.write('<h1> Ini adalah halaman Contact </h1>');
        res.end();
    }else{
        // res.write('Hello World');
        fs.readFile('./index.html',(err,data)=>{
            if(err){
                res.writeHead(404);
                res.write('Error:file not found');
            }else{
                res.write(data);
            }
            res.end();
        }); 
    }

    // res.writeHead(200,{
    //   'Content-Type' : 'text/html',
    // });
    // res.write("Hello World");
    // res.end();
}).listen(port, () => {
    console.log(`Server is listening on ${port}`);
});