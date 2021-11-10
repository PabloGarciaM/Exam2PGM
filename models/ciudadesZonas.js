const Sequelize = require("sequelize")

const CiudadZona = (sequelize)=>{
    sequelize.define('ciudad',{

        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            
        },
        nombre:{
            type:Sequelize.STRING(100),
            allowNull: false,
            
        },
        nombrePais:{
            type:Sequelize.STRING(50),
            allowNull: false,
            
        },
        atractivo:{
            type:Sequelize.STRING(50),
            allowNull: false,
            
        },
        descripcion:{
            type:Sequelize.STRING(200),
            allowNull: false,
            
        },
        contadorInteres:{
            type:Sequelize.INTEGER,
            allowNull: false,
            
        },
    })
}

module.exports = CiudadZona