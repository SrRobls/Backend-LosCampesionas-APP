const express = require("express");
const router = express.Router();
//cargar el schema
let productoSchema = require("../db/schemas/productoSchema");

// 1) Metodo HTTP (verbos HTTP)
// 2) RUTA (VIrtual)
// 3) EL ALGORITMO QUE YO PROGRAMO PARA RESPONDER ESA PETICION
router.get("/get/:idProducto", async function (req, res) {
    let idProducto = req.params.idProducto;
    let result = await productoSchema.findProductoById(idProducto);
    res.json(result);
});

router.get("/all", async function (req, res) {
    let result = await productoSchema.getAllProductos();
    res.json(result);
});

router.post("/create", async function (req, res) {
    let newProducto = req.body;
    let result = await productoSchema.createProducto(newProducto);
    res.json(result);
});

module.exports = router;