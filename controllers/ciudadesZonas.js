const path = require('path')

//Importar objeto de conexión
const CiudadZona = require('../utils/database').models.ciudad

//Funcion para validar una ciudad o zona de interes
/*
async function ciudadValida(ciudad){
    
}

//Crea una ciudad o zona nueva, CREATE
if(!CiudadZona.includes(ciudad))
*/


exports.agregarCiudad = (req, res) => {
    console.log(req.body)
    CiudadZona.findOne({
        where: {
            nombre: req.body.nombre,
            nombrePais: req.body.nombrePais
        }
    }).then(ciudad =>{
        if(ciudad){
            CiudadZona.update({
                contadorInteres: (ciudad.contadorInteres+1)
        
            }, {
                where: {
                    id: ciudad.id
                }
            }
            )
            res.json({message:"La ciudad existe"})

           //La ciudad existe, aumentar contador 
        }else{
            console.log("prueba")
            console.log(req.body)

            CiudadZona.create(req.body)
                .then(ciudad =>
                    res.json({ data: ciudad }),
                    res.json({ estado: "aceptado" })
    
                ).catch((err) => {
                    console.log(err)
                    res.json({ estado: "error" })
                })
        }
    }).catch((err) => {
        console.log(err)
        res.json({ estado: "error" })
    })


}

exports.postAgregarValidarCiudadZona = async (req, res) => {
    if (req.body.id > 0 && req.body.nombre > 0 && req.body.nombrePais > 0 &&
        req.body.atractivo > 0 && req.body.atractivo > 0 && req.body.contadorInteres > 0) {

        const ciudadRepetida = await CiudadZona.find({
            nombre: req.body.nombre
        })
    }

    else if (ciudadRepetida.length == 0) {
        console.log("nueva ciudad")
        CiudadZona.create(req.body).then((result) => {
            console.log("Ciudad creada exitosamente")
            res.json({
                estado: "aceptado"
            })
        }).catch((err) => {
            console.log(err)
            res.json({
                estado: "rechazado"
            })
        })
    }
    //Validación de ciudad o zona de interés

    //Contador de interés 
    //Registro de ciudad o zona de interés

}

exports.postAgregarCiudadZona = (req, res) => {
    console.log(req.body)
    CiudadZona.create(req.body).then((result) => {
        console.log("consolaVideojuego creada exitosamente")
        res.json({
            estado: "aceptado"
        })
    }).catch((err) => {
        console.log(err)
        res.json({
            estado: "rechazado"
        })
    })
}

//Consulta la ciudad o zona solamente por pais, READ
exports.consultarCiudad = (req, res) => {
    CiudadZona.findAll()
        .then(ciudad => {
            console.log(ciudad)
            res.json(ciudad)
        })
        .catch(error => {
            console.log(error)

            res.json({
                estado: "error"
            })
        })
}

exports.filter = (req, res) => {
    CiudadZona.findAll({
        where: {
            nombrePais: req.body.pais
        }
    })
        .then(ciudad => {
            console.log(ciudad)
            res.json(ciudad)
        })
        .catch(error => {
            console.log(error)

            res.json({
                estado: "error"
            })
        })
}

exports.borrarCiudad = (req, res) => {

    console.log(req.body)
    CiudadZona.destroy({
        where: {
            id: req.body.id
        }
    }).then(() => {

        console.log("Ciudad eliminada")
        res.json({ estado: "aceptado" })

    }).catch(error => {
        console.log(error)

        res.json({
            estado: "error"
        })


    })
}
exports.actualizarCiudad = (req, res) => {
    console.log(req.body)
    CiudadZona.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(() => {

        console.log("Registro actualizado")
        res.json({ estado: "aceptado" })

    }).catch(error => {
        console.log(error)

        res.json({
            estado: "error"
        })


    })

}

