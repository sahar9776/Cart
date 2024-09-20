import React, { useState, useEffect, createContext } from "react";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{products}}>
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsProvider;