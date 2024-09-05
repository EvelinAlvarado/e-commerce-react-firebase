import { createContext, ReactNode, useEffect, useState } from "react";
import { ProductType } from "../types/ProductType.ts";

interface CartContextProps {
  cartItems: ProductType[];
  addToCart: (item: ProductType, quantity: number) => void;
  quantityProduct: () => number;
  totalPrice: () => number;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const getInitialCart = (): ProductType[] => {
    try {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error parsing cartItems from localStorage", error);
      return [];
    }
  };
  const [cartItems, setCartItems] = useState<ProductType[]>(getInitialCart);

  const addToCart = (item: ProductType, quantity: number) => {
    const productAdded = { ...item, quantity };
    const newCart = [...cartItems];
    const existingProduct = newCart.find((product) => product.id === item.id);

    if (existingProduct) {
      // que existingProduct.quantity no sea undefined
      existingProduct.quantity = quantity;
    } else {
      newCart.push(productAdded);
    }

    // Filtrar los productos con cantidad 0
    const filteredCart = newCart.filter((item) => (item.quantity ?? 0) > 0);
    setCartItems(filteredCart);
  };

  const quantityProduct = (): number => {
    return cartItems.reduce((total, product) => {
      return total + (product.quantity || 0);
    }, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };
  const totalPrice = (): number => {
    return cartItems.reduce((total, current) => {
      return total + current.price * (current.quantity || 0);
    }, 0);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, quantityProduct, totalPrice, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
