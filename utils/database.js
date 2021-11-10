//Biblioteca de Sequelize
const Sequelize = require('sequelize')

//Conexión con la base de datos
const sequelize = new Sequelize('Exam2PGM','user3','root',{
    dialect: 'mysql',
    host: '54.227.9.233',
    define:{
 
        timestamps:false,
 
        freezeTableName:true
    }
})
const modelDefiners=[
 
    require("../models/ciudadesZonas")
 
]
 
//Adherir al objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}
 
 console.log(sequelize)
 
module.exports = sequelize;

