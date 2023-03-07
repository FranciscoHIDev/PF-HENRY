import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store/store";
import { Provider } from "react-redux";
// PRUEBA DE AUTH0
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>

    <BrowserRouter>
      <Auth0Provider
        domain="dev-qnvnr45ttbe81bet.us.auth0.com"
        clientID="Fp70Q2d5uwT1hOaXTEOK0rJGINGGicYA"
        rediretUrl={window.location.origin}> 
        <App />
      </Auth0Provider> 

    </BrowserRouter>
  </Provider>
);
