const pagoFacturaSchema = require("../Models/PagoFactura");
const PagoFactura = require("../Models/PagoFactura");
const axios = require('axios');
const carSchema = require('../Models/Cars.js');
const userSchema = require('../Models/Users');
const Users = require("../Models/Users");
var nodemailer = require("nodemailer");
/**
 * It creates a new user in the database
 * @param req - The request object.
 * @param res - The response object.
 */

//========================== NOTIFICATIONS =========================\\

const postCompra = async (req, res) => {
  try {
    const idData = req.body.data.id   // ID PARA BUSCAR EN API MERC. PAG
    const shopping = await axios.get(`https://api.mercadopago.com/v1/payments/${idData}`,   // SOLICITUD A LA API 
      {
        headers: {
          "Content-Type": "application/javascript",
          Authorization: `Bearer ${process.env.MERCADOPAO_kEY}` 
        } 
      }
    ); 
    const userCompra = pagoFacturaSchema(shopping.data); 

    const newUserCompra = await new PagoFactura({
      items: shopping.data.additional_info.items[0], 
      id_pay: idData,
      date_approved: userCompra.date_approved,
      operation_type: userCompra.operation_type,
      order: userCompra.order,
      payer: shopping.data.payer.identification,
      status: userCompra.status, 
      status_detail: userCompra.status_detail,
      email: shopping.data.external_reference
    })                        //   -------> SE CREA EL PRODUCTO      

    const saveCompra = await newUserCompra.save();            //  -----> SE GUARDA PRODUCTO
    const users = await Users.find({email: shopping.data.external_reference})  
    let pagoFactura = users[0].pagoFactura
    pagoFactura.push(newUserCompra)   // ----->  AGREGAMOS EL PRODUCTO
    await userSchema.updateOne({email: shopping.data.external_reference}, {pagoFactura})
    await carSchema.updateOne(
      {_id: shopping.data.additional_info.items[0].category_id}, 
      { status: "invalid" } 
    )           // ---------------> DESACTIVAR PRODUCTO

    res.status(200).json(saveCompra);

  } catch (error) {
    console.error(error)
  }
}
//========================== FIN NOTIFICATIONS =========================\\

const getCompra = async (req, res) => {
  const facturas = await pagoFacturaSchema.find(); 
  res.status(200).json(facturas)
}

const putCompra = async (req, res) => {
  const {statusCar} = req.body;
  const modelCompra = await pagoFacturaSchema.updateOne({_id: req.body.id}, {statusCar})
  res.status(200).json(modelCompra)
}

module.exports = {
  postCompra,
  getCompra,
  putCompra
}
