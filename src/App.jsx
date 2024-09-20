import React, { useContext } from "react";
import { ProductsContext } from "./context/ProductsContext";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import ProductItem from "./component/ProductItem";

function App() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="app">
      <Header />
      <Sidebar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10">
        {products.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
