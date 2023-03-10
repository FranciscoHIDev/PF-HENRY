const express = require("express");
const router = express.Router();
const {
    pagarProducto
} = require("../Controllers/Producto.js");

router.get('/comprar/:id', pagarProducto)