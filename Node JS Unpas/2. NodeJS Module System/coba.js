function cetakNama(nama){
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : `Doddy Ferdiansyah`,
    umur : 20,
    cetakMhs (){
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
    }
}

class Orang {
    constructor(){
        console.log('Objek orang telah dibuat !!');
    }
}

// cara 1
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// cara 2
// module.exports = {
//     cetakNama : cetakNama,
//     PI : PI,
//     mahasiswa : mahasiswa,
//     Orang : Orang,
// };

// cara 3 menggunakan ES6 jika nama sama cukup ditulis sekali saja
module.exports = {cetakNama,PI,mahasiswa,Orang};

