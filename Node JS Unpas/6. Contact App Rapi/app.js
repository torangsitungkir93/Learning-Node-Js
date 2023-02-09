const yargs = require('yargs');
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: "Email",
            demandOption: false,
            type: 'string',
        },
        noHP: {
            describe: "Nomor Handphone",
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        // const contact = {
        //     nama: argv.nama,
        //     email: argv.email,
        //     noHP: argv.noHP,
        // };
        contacts.simpanContact(argv.nama,argv.email,argv.noHP);
    },
}).demandCommand();


// Menampilkan daftar semua nama contact
yargs.command({
    command: 'list',
    describe : "Menampilkan semua nama & nomor HP contact",
    handler(){
        contacts.listContact();
    }
});

// Menampilkan detail sebuah kontak
yargs.command({
    command: 'detail',
    describe : "Menampilkan detail sebuah contact berdasarkan nama",
    builder : {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: 'string',
        }, 
    },
    handler(argv){
        contacts.detailContact(argv.nama);
    }
});

// Menghapus kontak berdasarkan nama
yargs.command({
    command: 'delete',
    describe : "Menghapus sebuah contact berdasarkan nama",
    builder : {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: 'string',
        }, 
    },
    handler(argv){
        contacts.deleteContact(argv.nama);
    }
});

yargs.parse();