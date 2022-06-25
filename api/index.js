//Traemos la DB
const db = require('../models');

//esta mejor visto asignar a una constante una función
const getBooks = async () => {
    //Join....autor
    const libros = await db.libro
            .findAll({include: db.autor})
            .then(results => {
            return results;
        } );

    return libros
}

module.exports = {
    getBooks
}