const {MongoClient} = require('mongodb');


const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'wpu';

const client = new MongoClient(uri,{
    useNewUrlParser : true,
    useUnifiedTopology :true,
});

client.connect((error,client)=>{
    if(error){
        return console.log('koneksi gagal');
    }

    console.log('Koneksi berhasil');
});