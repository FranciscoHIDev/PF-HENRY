import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import axios from 'axios'

// axios.defaults.baseURL = "http://localhost:3001"
//axios.defaults.baseURL = "https://pi-food-henry.up.railway.app"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>

    <BrowserRouter>
      <Auth0Provider
        domain="dev-2llhwpnt06dhuqy3.us.auth0.com"
        clientId="Hpt83nEK3MsdzgUKBPayjcJz9x84qObs"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>
);
