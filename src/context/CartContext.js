import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // calculate Total Quantity
  useEffect(() => {
    if (cart) {
      const totalQty = cart.reduce((acc, cur) => {
        return acc + cur.quantity;
      }, 0);
      setTotalQuantity(totalQty);
    }
  });

  // calculate Total Price
  useEffect(() => {
    if (cart) {
      const allPrice = cart.reduce((acc, cur) => {
        return acc + cur.quantity * cur.price;
      }, 0);
      setTotalPrice(allPrice);
    }
  }, [cart]);

  // add Product To Cart
  const addProductToCart = (product) => {
    const checkexistingProductInCart = cart.find(
      (item) => item.id === product.id
    );

    if (checkexistingProductInCart) {
      const newCart = [...cart].map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      const newCartItem = { ...product, quantity: 1 };
      setCart([...cart, newCartItem]);
    }
  };

  // remove Product From Cart
  const removeProductFromCart = (product) => {
    const newCart = [...cart].filter((item) => item.id !== product.id);
    setCart(newCart);
  };

  // decrease Product Quantity
  const decreaseProductQuantity = (product) => {
    const checkexistingProductInCart = cart.find(
      (item) => item.id === product.id
    );
    if (checkexistingProductInCart) {
      const newCart = [...cart].map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (product.quantity <= 1) {
      removeProductFromCart(product);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        decreaseProductQuantity,
        totalQuantity,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
