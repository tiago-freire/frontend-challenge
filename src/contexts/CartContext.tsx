import { createContext, useState } from "react";

export const defaultCart: Cart = {
  items: [],
};

const CartContext = createContext<CartContextType>({
  cart: defaultCart,
  setCart: () => {},
});

const CartContextProvider = ({ children }: any) => {
  const localStorageCartItem: string | null = localStorage.getItem("cart");
  const cartFromLocalStorage: Cart = localStorageCartItem ? JSON.parse(localStorageCartItem) : null;
  const [cart, setCart] = useState<Cart>(cartFromLocalStorage || defaultCart);

  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
};

export { CartContext, CartContextProvider };
