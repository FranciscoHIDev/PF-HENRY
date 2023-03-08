const express = require("express");
const router = express.Router();
const{
    routerGetContactForm,
    routerPostContactForm,
    routerByidForm,
    routerPutContactForm,
    routerDeleteContactForm,
} = require("../Controllers/ContactFormController.js");


/* This is a post request that is being sent to the server. */
router.post("/", (req, res) => {
    routerPostContactForm(req, res);
    });

  /* This is a get request that is being sent to the server. */
    router.get("/", (req, res) => {
    routerGetContactForm(req, res);
});

  /* This is a get request that is being sent to the server. */
    router.get("/:id", (req, res) => {
    routerByidForm(req, res);
});

/* This is a put request that is being sent to the server. */
router.put("/:id", (req, res) => {

  routerPutContactForm(req, res);
});

  /* This is a delete request that is being sent to the server. */
    router.delete("/:id", (req, res) => {
    routerDeleteContactForm(req, res);
});

module.exports = router;