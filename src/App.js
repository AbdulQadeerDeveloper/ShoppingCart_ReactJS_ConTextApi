import React from "react";
import { Routes, Route } from "react-router-dom";

import Cart from "./pages/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
