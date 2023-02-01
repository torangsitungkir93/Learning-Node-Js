// Core Module
// File System

const fs = require(`fs`);

// Menuliskan String ke file (synchronous)
try {
    fs.writeFileSync('data/test.txt', 'Hello World secara sychronous!');
}catch(e){
    console.log(e);
};

// Menuliskan String ke file (Asychronous)
fs.writeFile('data/test2.txt', 'Hello World Secara Asynchronous',(err)=>{
    console.log(err);
});

// Membaca isi file secara Sychronous
const data = fs.readFileSync('data/test.txt','utf-8');
console.log(data);

// Membaca isi file secara Asynchronous
fs.readFile('data/test2.txt','utf-8',(err,data) =>{
    if(err) throw err;
    console.log(data);
});

