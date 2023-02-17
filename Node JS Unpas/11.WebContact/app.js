const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const {loadContact,findContact} = require('./utils/contact');

const app = express()
const port = 3000

// Gunakan EJS
app.set('view engine','ejs');
app.use(expressLayouts);

// Built-in middleware
app.use(express.static('public'));


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
    });
})
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