const {mercadopago}=require('../utils/mercadopago');
const carSchema = require("../Models/Cars.js");

const pagarProducto = async(req , res) =>{
 const car=req.body.dataMP
 const a = await carSchema.findById(car.id)
 //console.log(a)

    let preference = {
		items: [
            {
              title: a.model+" "+a.brand,
              description: a.brand,
              picture_url: a.image,
              quantity: 1,
              currency_id: "ARS",
              unit_price: a.price
            }],
            //notification_url: "http://localhost:3001/cars/n",
           /*  payer: {
              phone: {},
              identification: {},
              address: {}
            }, */
            
		back_urls: {
			"success": "http://success.com",
			"failure": "http://failure.com",
			"pending": "http://pending.com"
		},
		auto_return: "approved",
	};
  //console.log(preference)
	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.send({ 
				id: response.body.id,
			})
      //console.log(response.body.init_point)
		}).catch(function (error) {
			console.log(error);
      res.status(400).send(error)
		});
}

module.exports={pagarProducto}