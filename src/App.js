import React from "react";
import { Routes, Route } from "react-router-dom";

import Cart from "./pages/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";

import GoogleOAuthLogin from "./components/navbar/GoogleOAuthLogin";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/google" element={<GoogleOAuthLogin />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
