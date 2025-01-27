import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:prodId" element={<ProductDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={ <Cart/>} />
    </Routes>
  </BrowserRouter>
);
