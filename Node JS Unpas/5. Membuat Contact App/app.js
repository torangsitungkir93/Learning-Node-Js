




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