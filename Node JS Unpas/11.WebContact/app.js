const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const {loadContact,findContact,addContact,cekDuplikat,deleteContact, updateContacts} = require('./utils/contact');
const { body,validationResult,check } = require('express-validator');
//Module untuk Flash Message
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express()
const port = 3000

// Gunakan EJS
app.set('view engine','ejs');
app.use(expressLayouts);

// Built-in middleware
app.use(express.static('public'));
// membuat middleware
app.use(express.urlencoded({extended:true}));


// Konfigurasi Flash
app.use(cookieParser('secret'));
app.use(session({
    cookie : {maxAge:6000},
    secret : 'secret',
    resave : true,
    saveUninitialized:true,
}));
app.use(flash());

app.get('/', (req, res) => {
//   res.send('Hello World!')

    // res.json({
    //     nama : 'Torangto Situngkir',
    //     email : 'torangsitungkir93@gmail.com',
    //     noHP : '08121245245',
    // });

    const mahasiswa = [
        {
            nama : "Torangto Situngkir",
            email : "torangsitungkir91@gmail.com",
        },
        {
            nama : "Erik",
            email : "erik@gmail.com",
        },
        {
            nama : "Doddy",
            email : "doddy@gmail.com",
        },
    ];
    res.render('index',{
        nama : 'Torangto Situngkir',
        title : 'Halaman Home',
        layout : 'layouts/main-layout',
        mahasiswa,
    });
})

app.get('/about', (req, res) => {
    res.render('about',{
        layout : 'layouts/main-layout',
        title:'Halaman About'
    });
})

app.get('/contact', (req, res) => {
    const contacts = loadContact();
    // Untuk meload contact json yang sudah dibuat sebelumnya

    res.render('contact',{
        layout : 'layouts/main-layout',
        title:'Halaman Contact',
        contacts,
        msg:req.flash('msg'),
    });
})

// Routes Baru agar apapun yang ditangkap setelah contact tidak dianggap nama
app.get('/contact/add',(req,res)=>{
    res.render('add-contact',{
        title: 'Form Tambah Data Contact',
        layout: 'layouts/main-layout',
    })
});

// Proses Data Kontak
app.post('/contact',[
    body('nama').custom((value)=>{
        const duplikat = cekDuplikat(value);
        if(duplikat){
            throw new Error('Nama Kontak sudah Digunakan!');
        }
        return true;
    }), 
    check('email','Email anda tidak Valid').isEmail(),
    check('nohp','No HP tidak valid').isMobilePhone('id-ID'),
],(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        // return res.status(400).json({ errors: errors.array() });
        res.render('add-contact',{
            title:'Form Data Kontak',
            layout: 'layouts/main-layout',
            errors:errors.array(),
        })
    }else{
        addContact((req.body));
        // kirimkan pesan flash
        req.flash('msg','Data kontak berhasil ditambahkan!');
        res.redirect('/contact');  
    }
});

// Proses delete kontak
app.get('/contact/delete/:nama',(req,res)=>{
    const contact = findContact(req.params.nama);
    // Jika kontak tidak ada 
    if(!contact){
        res.status(404);
        res.send('<h1>404</h1>')
    }else{
        deleteContact(req.params.nama);
         // kirimkan pesan flash
         req.flash('msg','Data kontak berhasil dihapus!');
         res.redirect('/contact');  
    }
});

// form ubah data contact
app.get('/contact/edit/:nama',(req,res)=>{
    
    const contact = findContact(req.params.nama);

    res.render('edit-contact',{
        title: 'Form Ubah Data Contact',
        layout: 'layouts/main-layout',
        contact,
    });
});

//Proses Ubah data
app.post('/contact/update',[
    body('nama').custom((value,{req})=>{
        const duplikat = cekDuplikat(value);
        if(value !== req.body.oldNama && duplikat){
            throw new Error('Nama Kontak sudah Digunakan!');
        }
        return true;
    }), 
    check('email','Email anda tidak Valid').isEmail(),
    check('nohp','No HP tidak valid').isMobilePhone('id-ID'),
],(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        // return res.status(400).json({ errors: errors.array() });
        res.render('edit-contact',{
            title:'Form Ubah Kontak',
            layout: 'layouts/main-layout',
            errors:errors.array(),
            contact:req.body,
        })
    }else{
        updateContacts(req.body);
        // kirimkan pesan flash
        req.flash('msg','Data kontak berhasil diubah!');
        res.redirect('/contact');  
    }
});


// Halaman detail kontak
app.get('/contact/:nama', (req, res) => {
    const contact = findContact(req.params.nama);
    // Untuk meload contact json yang sudah dibuat sebelumnya

    res.render('detail',{
        layout : 'layouts/main-layout',
        title:'Halaman Detail Contact',
        contact,
    });
})


app.use('/',(req,res)=>{
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})