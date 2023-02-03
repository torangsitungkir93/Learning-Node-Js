

const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){ 
    fs.writeFileSync(dataPath,'[]','utf-8');
    console.log('Terdapat bug');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve,reject) =>{
        rl.question(pertanyaan,(nama)=>{
            resolve(nama);
        });
    });
}

const simpanContact = () => {
    const contact = {nama,email,noHP};
    const fileBuffer = fs.readFileSync('data/contacts.json','utf-8');
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));

    console.log('Terimakasih sudah memasukkan data.');
    rl.close();
};

