import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function MPButton({ id }) {
  useEffect(() => {
    fetchCheckout();
  }, []);

  const { isAuthenticated, user } = useAuth0();
  // aqui se recibe el body
  const email = user.email;

  const dataMP = {
    id,
    email,
  };

  //-----------------------
  // const fetchCheckout = async () => {
  //   const res = await fetch("http://localhost:3001/cars/comprar", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       dataMP,
  //     }),
  //   });
  //   const data = await res.json();

  //   console.log(data);
  //   if (data) {
  //     const script = document.createElement("script");
  //     script.type = "text/javascript";
  //     script.src = "https://sdk.mercadopago.com/js/v2";
  //     script.setAttribute("data-preference-id", data.id);

  // script.onload = async function() {
  //   const mp = await new window.MercadoPago(
  //     "TEST-b38eba64-c8b9-4330-aa82-c3e0e29d9f66",
  //     {
  //       locale: "es-AR",
  //     }
  //   );
  //   console.log(data);
  //   mp.checkout({
  //     preference: {
  //       id: data.id,
  //     },
  //     render: {
  //       container: ".cho-container",
  //       label: "Mercadopago",
  //       error: function(error) {
  //         console.log(error);
  //       }
  //     },

  //    });
  // };
  //     document.body.appendChild(script);
  //   }
  // };

  //-----------------------
  const fetchCheckout = async () => {
    const res = await fetch(
      "https://deploying-pf-production.up.railway.app/cars/comprar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dataMP,
          // aqui se manda la data recibida en el body
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    if (data) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.setAttribute("data-preference-id", data.id);

      script.onload = function () {
        const mp = new window.MercadoPago(
          "TEST-b38eba64-c8b9-4330-aa82-c3e0e29d9f66",
          {
            locale: "es-AR",
          }
        );
        console.log(data);
        mp.checkout({
          preference: {
            id: data.id,
          },
          render: {
            container: ".cho-container",
            label: "Comprar",
            error: function (error) {
              console.log(error);
            },
          },
        });
      };
      document.body.appendChild(script);
    }

    // const mp = new window.MercadoPago(
    //   "TEST-b38eba64-c8b9-4330-aa82-c3e0e29d9f66",
    //   {
    //     locale: "es-AR",
    //   }
    // );
    // console.log(data);
    // mp.checkout({
    //   preference: {
    //     id: data.id,
    //   },
    //   render: {
    //     container: ".cho-container",
    //     label: "Mercadopago",
    //   },
    // });;
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="cho-container"></div>
      ) : (
        <div>....</div>
      )}
    </>
  );
}
