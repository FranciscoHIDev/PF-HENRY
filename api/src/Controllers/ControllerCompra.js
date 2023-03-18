const userCompraSchema = require("../Models/UserCompra");
const userCompra = require("../Models/UserCompra");
/**
 * It creates a new user in the database
 * @param req - The request object.
 * @param res - The response object.
 */

/* 
{
action: 'payment.created',
api_version: 'v1',
data: { id: '1313387933' },
date_created: '2023-03-16T23:30:45Z',
id: 105266038419,
live_mode: false,
type: 'payment',
user_id: '230063850'
}
*/

const controllerCompra = async (req, res) => {
  try {
    const shop = userCompra();
    const idData = req.body.data.id;
    const shopping = await axios.get(`https://api.mercadopago.com/v1/payments/${idData}`);
console.log(shopping.data)
    res.status(200).send("OK")
  } catch (error) {
    console.error(error) 
  }
}

module.exports = {
  controllerCompra,
}