/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./context/Context";
import { Auth0Provider } from "@auth0/auth0-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-mou8cqwkqvqhwfvz.us.auth0.com"
    clientId="SWDvHNZZ8FgCbGrcXfFyuGBkbVWUOJMk"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
  </Auth0Provider>
);
