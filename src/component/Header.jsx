import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

function Header() {
  const {isOpen, setIsOpen}=useContext(SidebarContext);
  
  return (
    <div className="w-full h-[60px] flex justify-between items-center shadow-md shadow-slate-400 px-10">
      <h3 className="text-2xl font-semibold uppercase">Cart Test</h3>
      <button onClick={() => { setIsOpen(!isOpen) }} className="relative cursor-pointer ">
      <i className="fa-solid fa-cart-shopping text-2xl"></i>
      </button>
    </div>
  );
}

export default Header;
