var express = require('express');
var router = express.Router();

const api = require('../api')

/* GET home page. */
router.get('/', async (req, res) => {
  // Llamamos a la función getBooks que está dentro de api
  const libros = await api.getBooks();
  console.log(libros);

  //Si soy un servicio como whetermap siempre devuelvo un JSON usadno un  res.send
  res.send(libros);

  //monorepo vs MONOLITO
  //delegar el front---se ocupa angular y levanta el JSON fetch a mi backend htmlttpsrequest
  //res.render('index', { title: 'Ron Weasley' });
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


//crear una ruta de /autores
//Mostrar el listado de Json de todos los autores
router.get('/autores', async (req, res) => {
  const autores = await api.getAuthors();

  res.send(autores);
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
