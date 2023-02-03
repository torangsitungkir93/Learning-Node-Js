

const fs = require(`fs`);
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

// Membuat folder Data
const dirPath = "./data";
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// Membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){ 
    fs.writeFileSync(dataPath,'[]','utf-8');
    console.log('Terdapat bug');
}

// Bungkus kedalam Promise

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve,reject) =>{
        rl.question(pertanyaan,(nama)=>{
            resolve(nama);
        });
    });
}

// const pertanyaan1 = () => {
//     return new Promise((resolve,reject) =>{
//         rl.question('Masukkan Nama anda : ',(nama)=>{
//             resolve(nama);
//         });
//     });
// };

// const pertanyaan2 = () => {
//     return new Promise((resolve,reject) =>{
//         rl.question('Masukkan Email anda : ',(email)=>{
//             resolve(email);
//         });
//     });
// };

const main = async () => {
    const nama = await tulisPertanyaan('Masukkan Nama Anda : ');
    const email = await tulisPertanyaan('Masukkan Email Anda : ');
    const noHP = await tulisPertanyaan('Masukkan NoHP Anda : ');

    const contact = {nama,email,noHP};
    const fileBuffer = fs.readFileSync('data/contacts.json','utf-8');
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));

    console.log('Terimakasih sudah memasukkan data.');
    rl.close();
};

main();

// rl.question('Masukkan nama anda : ',(nama)=>{});

// // Menjorok Kedalam
// rl.question('Masukkan nama anda : ',(nama)=>{
//     rl.question('Masukkan nomor HP anda : ',(noHP)=>{
//         const contact = {nama,noHP};
//         const fileBuffer = fs.readFileSync('data/contacts.json','utf-8');
//         const contacts = JSON.parse(fileBuffer);

//         contacts.push(contact);
//         fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
    
//         console.log('Terimakasih sudah memasukkan data.');
//         rl.close();
//     });
// });







