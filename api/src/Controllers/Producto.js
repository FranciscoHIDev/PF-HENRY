const {mercadopago}=require('../utils/mercadopago');
const Producto =require('../Models/Cars')

const pagarProducto = async(req , res) =>{
    const idfind = req.params.id;
    const datos = req.body.items;
    const producto = await Producto.findById(idfind)
    let preference = {
        binary_mode: true,
		items: [
            {
              title: producto.module,
              description: producto.marca,
              picture_url: producto.image,
              quantity: 1,
              currency_id: "$ARS",
              unit_price: producto.price
            }],
        payer: {
            phone: {},
            identification: {nun:"12356545"},
            address: {
              /*   calle_av:"",
                altura:123,
                ciudad:"",
                provincia:"", */
            }
          },
		back_urls: {
			"success": "http://success.com",
			"failure": "http://failure.com",
			"pending": "http://pending.com"
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			},
            console.log(response));
		}).catch(function (error) {
			console.log(error);
		});
}
module.exports={pagarProducto}