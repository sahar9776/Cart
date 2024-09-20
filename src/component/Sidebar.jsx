import React, {  useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

function Sidebar() {
  const { isOpen,setIsOpen } = useContext(SidebarContext);
  const { cart,totalQuantity,totalPrice } = useContext(CartContext);
  

  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"}
         w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 overflow-y-auto`}
    >
      <div className="w-full h-[60px] bg-slate-950 text-slate-200  flex justify-between items-center px-10">
        <h4 className=" text-2xl uppercase">cart ({totalQuantity})</h4>
        <button onClick={() => setIsOpen(false)}>
        <i class="fa-solid fa-xmark text-xl"></i>
        </button>
      </div>

      <div className="w-full grid grid-cols-1 gap-20 p-10">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>

      <div className="border-t-2 uppercase px-10 py-4 font-semibold">
        total price : {totalPrice.toFixed(2)} $
      </div>
    </div>
  );
}

export default Sidebar;
