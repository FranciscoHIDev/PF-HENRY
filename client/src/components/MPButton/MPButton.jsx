import { useEffect, useContext, useState } from "react";
//import {UseMercadoPagoProps} from "mercadopago-v2-react"
export function MPButton({id}) {
  // aqui se recibe el body
  const dataMP ={
    id
        }
  //-----------------------

  useEffect(() => {
    const fetchCheckout = async () => {
      const res = await fetch("http://localhost:3001/cars/comprar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dataMP,
          // aqui se manda la data recibida en el body
        }),
      });
      const data = await res.json();
     
      
        console.log(data)
        if (data) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://sdk.mercadopago.com/js/v2";
        script.setAttribute("data-preference-id", data.id);
        document.body.appendChild(script);


        const mp = new window.MercadoPago(
          "TEST-b38eba64-c8b9-4330-aa82-c3e0e29d9f66",
          {
            locale: "es-AR",
          }
        );
       
        mp.checkout({
          preference: {
            id: data.id,
          },
          render: {
            container: ".cho-container",
            label: "Mercadopago",
          },
        });
    
        

    };
  useEffect(() => {
   
    fetchCheckout();   
  }, []);
  )
  return (

  <>
    <div className="cho-container">


    </div>
  </>
  
  );
  
}

