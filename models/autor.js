module.exports = (sequelize, DataTypes) => {
    const Autor = sequelize.define('autor', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
            nombreCompleto: DataTypes.STRING(150),
            codigoPais: DataTypes.STRING(2)
        },
        {
            freezeTableName: true,
            timestamps: false
// GDPR Si el usuario quiere que se eliminen los datos hay que eliminarlos de verdad (timestamp)

        });
    Autor.associate = (models) => {
        Autor.hasMany(models.libro);
        };
        return Autor;
    }