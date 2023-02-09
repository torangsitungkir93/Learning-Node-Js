
// Cara mengambil argument dari comand line 

const yargs = require("yargs");

console.log(process.argv[2]);
// console.log(yargs.argv);


// const contacts = require('./contacts');


// const main = async () => {
//     const nama = await contacts.tulisPertanyaan('Masukkan Nama Anda : ');
//     const email = await contacts.tulisPertanyaan('Masukkan Email Anda : ');
//     const noHP = await contacts.tulisPertanyaan('Masukkan NoHP Anda : ');

//    contacts.simpanContact(nama,email,noHP);
// };

// main();