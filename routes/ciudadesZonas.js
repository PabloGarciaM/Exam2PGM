const express = require("express")

const router = express.Router()

const ciudadController = require ('../controllers/ciudadesZonas')


router.post("/ciudades",ciudadController.agregarCiudad)

router.get("/ciudades",ciudadController.consultarCiudad)

router.post("/ciudades/filter",ciudadController.filter)

router.delete("/ciudades",ciudadController.borrarCiudad)

router.put("/ciudades",ciudadController.actualizarCiudad)

module.exports = router