export {};

declare global {
  type Product = {
    productId: number;
    productName: string;
    stars: number;
    imageUrl: string;
    listPrice: number;
    price: number;
    installments: [
      {
        quantity: number;
        value: number;
      }
    ];
  };

  type Cart = {
    items: Product[];
  };

  type CartContextType = {
    cart: Cart;
    setCart: React.Dispatch<React.SetStateAction<Cart>>;
  };
}
