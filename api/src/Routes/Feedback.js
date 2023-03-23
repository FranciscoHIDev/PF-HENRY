const express = require("express");
const router = express.Router();
const { postCompra, getCompra, putCompra } = require('../Controllers/ControllerCompra.js');


router.post("/", function (req, res) {
    postCompra(req, res) 
    });

    router.get("/", (req, res) => {
    getCompra(req, res);
});

router.put("/:id", (req, res) => {
    putCompra(req,res);
})


module.exports = router;