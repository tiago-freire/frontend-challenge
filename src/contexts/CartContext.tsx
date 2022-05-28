import { createContext, useState } from "react";

const defaultCart: Cart = {
  items: [],
  totalItems: 0,
  total: 0,
};

const CartContext = createContext<CartContextType>({
  cart: defaultCart,
  setCart: () => {},
});

const CartContextProvider = ({ children }: any) => {
  const cartFromLocalStorage: Cart = JSON.parse(localStorage.getItem("cart") || "null");
  const [cart, setCart] = useState<Cart>(cartFromLocalStorage ?? defaultCart);

  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
};

export { CartContext, CartContextProvider };