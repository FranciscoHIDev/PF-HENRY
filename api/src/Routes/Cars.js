const express = require("express");
const {mercadopago}=require('../utils/mercadopago');
const router = express.Router();
const {
  routerGetCars,
  routerPostCars,
  routerByidCars,
  routerPutCars,
  routerDeleteCars,
} = require("../Controllers/CarsController");
const {pagarProducto, feedback}=require('../Controllers/Producto')
const {routerLocation}=require('../Controllers/GetLocation')

/* This is a post request that is being sent to the server. */
router.post("/", (req, res) => {
  routerPostCars(req, res);
});

router.post('/comprar',(req, res) => {
  pagarProducto(req, res);
});
router.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

/* This is a get request that is being sent to the server. */
router.get("/", (req, res) => {
  routerGetCars(req, res);
});

router.get('/:location', async (req, res) => {
  try{
    const {location}=req.params;
      const carLocatio= await routerLocation(location);
      return res.send(carLocatio);
  }catch (error) {
      res.status(404).json(error.message);
  };
});

/* This is a get request that is being sent to the server. */
router.get("/idcar/:id", (req, res) => {
  routerByidCars(req, res);
});

/* This is a put request that is being sent to the server. */
router.put("/:id", (req, res) => {

  routerPutCars(req, res);
});
/* This is a delete request that is being sent to the server. */
router.delete("/:id", (req, res) => {
  routerDeleteCars(req, res);
});

module.exports = router;