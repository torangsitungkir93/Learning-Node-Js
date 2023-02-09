
const fs = require(`fs`);
const chalk = require('chalk');
const validator = require('validator');

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

// Membuat fungsi load contact yang akan dipakai berulang kali
const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json','utf-8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;
}

const simpanContact = (nama,email,noHP) => {
    const contact = {nama,email,noHP};
    // const fileBuffer = fs.readFileSync('data/contacts.json','utf-8');
    // const contacts = JSON.parse(fileBuffer);
    const contacts = loadContact();

    //Cek duplikat
    const duplikat = contacts.find((contact)=>contact.nama === nama);
    if(duplikat){
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar,gunakan nama lain'));
        return false;
    }

    //Cek email
    if(email){
        if(!validator.isEmail(email)){
            console.log(chalk.red.inverse.bold('Email anda tidak valid'));
            return false;
        }
    }

    //Cek Nomor HP
    if(!validator.isMobilePhone(noHP,'id-ID')){
        console.log(chalk.red.inverse.bold('Nomor HP anda tidak valid'));
        return false;

    }

    contacts.push(contact);
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));

    console.log(chalk.greenBright.inverse.bold('Terimakasih Sudah memasukkan data'));
};

const listContact = () => {
    const contacts = loadContact();
    if(contacts.length == 0 ){
        console.log(chalk.redBright.inverse.bold('Daftar Kontak Kosong'));
        return false;
    }else{
        console.log(chalk.cyanBright.inverse.bold('Daftar Kontak'));
    }
    contacts.forEach((contact,i) => {
        console.log(`${i+1}.${contact.nama} - ${contact.noHP}`);
    });
};

const detailContact = (nama) => {
    const contacts = loadContact();

    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

    if(!contact){
        nama = nama.slice(0,1).toUpperCase() + nama.substr(1);
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
        return false;
    }

    console.log(chalk.cyanBright.inverse.bold(contact.nama));
    console.log(contact.noHP);
    if(contact.email){
        console.log(contact.email);
    }

};

// untuk menghapus data cukup tricky sehingga kita membuat array baru untuk ditempel ke arry lama setelah data dihapus
const deleteContact = (nama) => {
    const contacts = loadContact();
    const newContacts = contacts.filter((contact)=> 
        contact.nama.toLowerCase() !== nama.toLowerCase()
    );

    if(contacts.length === newContacts.length){
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
        return false;
    }

    fs.writeFileSync('data/contacts.json',JSON.stringify(newContacts));
    console.log(chalk.green.inverse.bold(`data contact ${nama} berhasil dihapus !`));

};

module.exports = {simpanContact,listContact,detailContact,deleteContact};

