const express = require("express");
const router = express.Router();

/* This is importing the routes from the files that are in the same directory as this file. */
const carRoutes = require("./Cars");

/* Telling the server to use the routes in the files that are imported. */
router.use("/cars/id", carRoutes);


module.exports = router;
