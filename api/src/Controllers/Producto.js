const { mercadopago } = require("../utils/mercadopago");
const carSchema = require("../Models/Cars.js");

const pagarProducto = async (req, res) => {
  const car = req.body.dataMP;
  const email = car.email;
  const carId = await carSchema.findById(car.id);

  let preference = {
    items: [
      {
        category_id: carId.id,
        title: carId.model + " " + carId.brand,
        description: carId.brand,
        picture_url: carId.image,
        quantity: 1,
        currency_id: "ARS",
        unit_price: carId.price,
      },
    ],
    //notification_url: "http://localhost:3001/cars/n",
    /*  payer: {
              phone: {},
              identification: {},
              address: {}
            }, */

    back_urls: {
      success: "http://success.com",
      failure: "http://failure.com",
      pending: "http://pending.com",
    },
    auto_return: "approved",
    external_reference: email
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        global: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
      res.status(400).send(error);
    });
};

module.exports = { pagarProducto };

module.exports={pagarProducto}