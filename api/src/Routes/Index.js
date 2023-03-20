const express = require("express");
const router = express.Router()

/* This is importing the routes from the files that are in the same directory as this file. */
const carRoutes = require("./Cars");
const contactForm = require("./ContactForm");
const userRoutes = require("./Users");
const authRouter = require('./AuthRouters');
const reviewRouter = require ('./ReviewRouters')
const feedback = require('./Feedback.js');


/* Telling the server to use the routes in the files that are imported. */
router.use("/cars", carRoutes);
router.use("/contact", contactForm);
router.use("/users", userRoutes);
router.use('/auth', authRouter)
router.use('/review', reviewRouter)
router.use('/feedback', feedback);


module.exports = router;
