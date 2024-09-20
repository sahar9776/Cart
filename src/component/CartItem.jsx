import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const {
    addProductToCart,
    removeProductFromCart,
    decreaseProductQuantity,
  } = useContext(CartContext);

  return (
    <div className="min-w-full min-h-[200px] relative shadow-lg shaodow-slate-700 rounded-md text-center p-10">
      <h3 className="text-slate-700 font-semibold">{item.title}</h3>

      <div className="absolute bottom-0 right-0 flex justify-between items-center w-full h-[35px] rounded-bl-md rounded-br-md bg-slate-950 opacity-90 ">

      <button
          onClick={() => decreaseProductQuantity(item)}
          className="font-semibold text-white w-1/5 h-full duration-500 hover:shadow hover:shadow-white"
        >
          <i className="fa fa-minus"></i>
        </button>

        <button
          onClick={() => removeProductFromCart(item)}
          className="font-semibold text-white w-1/5 h-full duration-500 hover:shadow hover:shadow-white"
        >
          <i className="fa fa-trash"></i>
        </button>
        
        <p className="font-semibold text-white w-1/5 h-full flex justify-center items-center shadow shadow-white">
          {item.quantity}
        </p>

        <button
          onClick={() => {}}
          className="font-semibold text-white w-1/5 h-full duration-500 hover:shadow hover:shadow-white"
        >
          <i className="fa-solid fa-eye"></i>
        </button>

        <button
          onClick={() => addProductToCart(item)}
          className="font-semibold text-white w-1/5 h-full duration-500 hover:shadow hover:shadow-white"
        >
          <i className="fa fa-plus" ></i>
        </button>
       
      </div>
    </div>
  );
}

export default CartItem;
