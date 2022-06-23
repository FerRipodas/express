module.exports = (sequelize, DataTypes) => {
    const Libro = sequelize.define('libro', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: DataTypes.STRING(200),
        precio: DataTypes.INTEGER(6),
        portada: DataTypes.STRING(200)
    },{
        freeTableName: true,
        timestamp: false
    });

    //conectarlo con latabla de autores
    Libro.associate = (models) => {
        Libro.belongsTo(models.autor);
    }

    return Libro;
}
    