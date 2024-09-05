import { useState } from "react";
import { ProductType } from "../types/ProductType";
import { useCart } from "../context/CustomHooks";

interface ItemCountProps {
  stock: number;
  product: ProductType;
}

export const ItemCount = ({ stock, product }: ItemCountProps): JSX.Element => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(0);

  const handleDecreaseCount = (): void => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncreaseCount = (): void => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToBag = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
    } else {
      console.log("Select at least one item to add to the bag.");
    }
  };
  return (
    <div className="flex justify-between">
      <div className="flex flex-row gap-2 items-center">
        <button
          onClick={handleDecreaseCount}
          className="px-4 py-2 bg-[#ffb603] text-[#233a5e] font-bold rounded-xl"
        >
          -
        </button>
        <p className="text-center w-5">{quantity}</p>
        <button
          onClick={handleIncreaseCount}
          className="px-4 py-2 bg-[#ffb603] text-[#233a5e] font-bold rounded-xl"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToBag}
        className="bg-[#ffb603] text-[#233a5e] font-bold rounded-xl uppercase px-4 py-2"
      >
        Add to bag
      </button>
    </div>
  );
};
