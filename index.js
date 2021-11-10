const express = require("express");

const sequelize = require('./utils/database')

//Routes
const ciudadesRoutes = require('./routes/ciudadesZonas')

const appweb = express();

appweb.use(express.json())
appweb.use(express.urlencoded({extended:true}))

appweb.use("/",ciudadesRoutes)

//Creación del servicio
appweb.get("/prueba",(req,res)=>{
    res.send("Prueba del servidor funcionando")
})

sequelize.sync()
.then(()=>{
    appweb.listen(8082,()=>{
        console.log("Servidor en linea en el puerto 8082")
    })
})
.catch((err)=>{console.log(err)})
