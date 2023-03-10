import React, { useState } from 'react';
import mercadopago from 'mercadopago';

mercadopago.configure({
  access_token: 'TU_ACCESS_TOKEN_AQUI'
});

const PaymentForm = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  
  const handlePayment = async () => {
    // Crea una nueva preferencia de pago
    const response = await mercadopago.preferences.create({
      items: [
        {
          title: 'Producto de prueba',
          description: 'Descripción del producto de prueba',
          unit_price: 10.0,
          quantity: 1,
        }
      ],
      payer: {
        email: 'usuario@ejemplo.com'
      }
    });
    setPreferenceId(response.body.id);
  }
  
  return (
    <div>
      <button onClick={handlePayment}>Pagar</button>
      {preferenceId && <iframe src={`https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js?preference-id=${preferenceId}`} width="100%" height="500" frameborder="0" allowfullscreen></iframe>}
    </div>
  );
}

export default PaymentForm;