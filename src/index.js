import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductsProvider from "./context/ProductsContext";
import CartProvider from "./context/CartContext";
import SidebarProvider from "./context/SidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </SidebarProvider>
);
