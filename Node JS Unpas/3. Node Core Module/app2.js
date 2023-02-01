

// Readline 

const fs = require(`fs`);
const Readline = require('readline');
const rl = Readline.createInterface({
    input : process.stdin,
    output : process.stdout, 
});

rl.question('Masukkan nama anda : ',(nama) => {
    rl.question('Masukkan Nomor HP anda : ',(noHP) => {
        const contact = {nama,noHP};
        const file = fs.readFileSync('data/contacts.json','utf-8');
        const contacts = JSON.parse(file);
        contacts.push(contact);

        fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));

        console.log('Terimakasih sudah memasukkan data.');
        rl.close();
    });
});