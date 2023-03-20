const express = require('express')
const router = express.Router();
const {getReview,
    postReview,
    deleteReview,
    postRequest} = require('../Controllers/ReviewCotroller')

router.post("/",(req,res)=>{
    postReview(req,res)
})
router.get("/",(req,res)=>{
    getReview(req,res)
})
router.delete("/",(req,res)=>{
    deleteReview(req,res)
})
router.post("/request",(req,res)=>{
    postRequest(req,res)
})
module.exports = router