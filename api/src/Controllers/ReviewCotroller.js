const Review =require('../Models/Review')
const reviewSchema =require('../Models/Review')
const usersSchema = require('../Models/Users');
const Users = require("../Models/Users");
const Cars= require('../Models/Cars')
const carsSchema= require('../Models/Cars')

const postReview= async (req , res)=>{

    const reviewR = reviewSchema(req.body);

    const newReview = await new Review({
        email:reviewR.email,
        idCar:reviewR.idCar,
        comment:reviewR.comment
    })
    const saveReview = await newReview.save();
    const cars = await Cars.find({_id:reviewR.idCar})
    let review = cars[0].review;
    review.push(newReview);
    await carsSchema.updateOne({_id:reviewR.idCar}, {review});
    const users = await Users.find({email:reviewR.email})
    review = users[0].review;
    review.push(newReview); 
    await usersSchema.updateOne({email:reviewR.email}, {review})
    res.status(200).json(saveReview)
}
const deleteReview= async (req , res)=>{
    const borado=await reviewSchema.deleteOne({_id:req.body.id})
    const cars = await Cars.find({_id:req.body.idCar})
    let review = cars[0].review;
    review=review.filter((e)=> JSON.stringify(e._id) !== JSON.stringify(req.body.id ) )
    await carsSchema.updateOne({_id:req.body.idCar}, {review});
    const users = await Users.find({email:req.body.email})
    review = users[0].review;
    review=review.filter((e)=>JSON.stringify(e._id) !== JSON.stringify(req.body.id ) )
    await usersSchema.updateOne({email:req.body.email}, {review})
  res.status(200).json(borado)
}

const getReview= async (req , res)=>{
    const review = await reviewSchema.find(); 
 res.status(200).json(review)
}
const postRequest = async (req,res)=>{
    res.status(200).json()
}
module.exports ={postReview,
                getReview,
                deleteReview,
                postRequest   }