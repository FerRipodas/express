var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET nosotros page */
router.get('/buscar', (req, res) => {
  //guardar los que escribio el usuario
//mostrarlo en la terminal

//params y query
//qury
let { termino} = req.query;
console.log(termino);

  res.send('estas en buscar')
});

  /* GET agregar */
router.get('/agregar', (req, res) => {
  res.render('pages/agregar');
});

  /* POST agregar-LIBRO */
  router.post('/agregar-libro', (req, res) => {
    //Conseguir lo que el usuario tipeo
    //para levantar algo por metodo post
    //debo usar ... req.body
    console.log(req.body);

      let {titulo, autor, precio} =req.body

    res.send(`Agregaron ${titulo} ${autor} ${precio}`)
    // res.render('pages/agregar');
  });

/*
GET
  req.params: (/:id)
  req.query: (?termino=sarasa)
POST
req.body

req.LOQUESEA.body
*/










/* GET nosotros page */
router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros')
});

/* GET nosotros page */
router.get('/contacto', (req, res) => {
  res.render('pages/contacto')
});



module.exports = router;
