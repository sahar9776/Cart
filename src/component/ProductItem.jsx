import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductItem({ item }) {
  const {
    addProductToCart,
    removeProductFromCart,
    decreaseProductQuantity,
  } = useContext(CartContext);

  return (
    <div className="w-full min-h-[200px] relative shadow-md shaodow-slate-700 rounded-md text-center p-10">
      <h5 className="text-slate-700 font-semibold">{item.title}</h5>

      <div className="absolute top-0 right-0 flex flex-col items-center w-[35px] rounded-tr-md rounded-br-md h-full bg-slate-950 opacity-90 ">
        <button
          onClick={() => addProductToCart(item)}
          className="font-semibold text-white w-full h-1/4 duration-500 hover:shadow hover:shadow-white"
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
        <button
          onClick={() => {}}
          className="font-semibold text-white w-full h-1/4 duration-500 hover:shadow hover:shadow-white"
        >
          <i className="fa-solid fa-eye"></i>
        </button>
        <button
          onClick={() => removeProductFromCart(item)}
          className="font-semibold text-white w-full h-1/4 duration-500 hover:shadow hover:shadow-white"
        >
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>
        <button
          onClick={() => decreaseProductQuantity(item)}
          className="font-semibold text-white w-full h-1/4 duration-500 hover:shadow hover:shadow-white"
        >
          <i className="fa fa-minus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
