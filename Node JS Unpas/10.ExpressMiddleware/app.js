const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express()
const port = 3000

// Gunakan EJS
app.set('view engine','ejs');
app.use(expressLayouts);

// Built-in middleware
app.use(express.static('public'));

// Application Level Middleware
app.use((req,res,next)=>{
    console.log('Time : ',Date.now());
    next();
});

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
    res.render('contact',{
        layout : 'layouts/main-layout',
        title:'Halaman Contact'});
})

app.get('/product/:id',(req,res)=>{
    // res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.params.idCategory}`);
    res.send(`Product ID : ${req.params.id} <br> Category : ${req.query.category}`);
});

app.use('/',(req,res)=>{
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})