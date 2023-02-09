const http = require ('http');

const server = http.createServer(function(req,res){
    res.end('Hi,Selamat datang anda berhasil membuat server dengan node js');
})

server.listen(8000);

console.log('Server running at port 8000');