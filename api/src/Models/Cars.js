const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["New", "Used"],
    default: "New",
  },
  brand: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  },
  model: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  category: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  },
  year: {
    type: Number,
    required: true,
    minLength: 4,
    maxLength: 5,
  },
  color: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 18,
  },
  price: {
    type: Number,
    required: true,
    minLength: 1,
  },
  doors: {
    type: Number,
    required: true,
  },
  mileage: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 7,
  },
  fuelType: {
    type: String,
    required: true,
    enum: ["gasoline", "electric", "gas", "hybrid"],
    default: "gasoline",
  },
  transissionType: {
    type: String,
    enum: ["automatic", "handbook", "semiautomatic"],
    required: true,
    default: "handbook",
  },
  fuelConsumption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minLength: 30,
    maxLength: 550,
  },
  image: {
    type: String,
    required: true,
    default: "https://bateriasparacarrosbogota.com/wp-content/uploads/2017/10/baterias-para-carro-spark.png",
  },
  status: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
  active: {
    type: String,
    enum: ["valid", "invalid"],
    default: "valid",
  },
  location: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 100,
  },
  // review: [
  //   {
  //     type: mongoose.Types.ObjectId,
  //     ref: "Review",
  //   },
  // ],
  billing: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Billings",
    },
  ],
});
module.exports = mongoose.model("Cars", carSchema);