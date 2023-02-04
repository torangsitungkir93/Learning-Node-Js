const http = require('http');


const server = http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('<h1>Hi</h1>, Selamat anda berhasil membuat server dengan <b>node js</b>');
    res.end;
});

server.listen(8000);

console.log('server runnning at port 8000');