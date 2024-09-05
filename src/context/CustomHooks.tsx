import { useContext } from "react";
import { CartContext } from "./CartContext";

// Custom hook for accessing the cart context safely
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
