import { ProductType } from "../types/ProductType.ts";
import { useCart } from "../context/CustomHooks";
import { Link } from "react-router-dom";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";

export const Cart = () => {
  const { cartItems, totalPrice, addToCart, clearCart } = useCart();

  const handleDecreaseCount = (item: ProductType) => {
    const newQuantity = Math.max((item.quantity || 0) - 1, 0); // Asegurarse de que no sea menor que 0
    addToCart(item, newQuantity); // Establecer la nueva cantidad
  };

  const handleIncreaseCount = (item: ProductType) => {
    const newQuantity = (item.quantity || 0) + 1;
    addToCart(item, newQuantity); // Establecer la nueva cantidad
  };

  console.log(cartItems);

  return (
    <div className="w-full flex flex-col items-center py-10 space-y-8">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold text-[#233a5e] mb-6 cursor-pointer">
            Your Cart
          </h2>
          <button onClick={() => clearCart()} type="button" className="mb-6">
            <RemoveShoppingCartOutlinedIcon className="text-[#233a5e]" />
          </button>
        </div>

        {/* Product in cart */}

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4"
          >
            <div className="flex items-center space-x-4 w-80">
              <img src={item.image} alt={item.title} className="w-20" />
              <div>
                <span className="block text-base  text-[#233a5e]">
                  {item.title}
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <button
                onClick={() => handleDecreaseCount(item)}
                className="px-4 py-2 bg-[#ffb603] text-white font-bold hover:bg-yellow-600 transition duration-300 rounded-xl"
              >
                -
              </button>
              <p className="text-center w-5">{item.quantity || 0}</p>
              <button
                onClick={() => handleIncreaseCount(item)}
                className="px-4 py-2 bg-[#ffb603] text-white font-bold hover:bg-yellow-600 transition duration-300 rounded-xl"
              >
                +
              </button>
            </div>
            <span className="text-lg font-semibold text-[#233a5e] w-20 text-right">
              ${item.quantity && item.price ? item.quantity * item.price : 0}
            </span>
          </div>
        ))}

        {/* Totals */}
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-[#233a5e] mb-6">
            Checkout
          </h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-[#233a5e]">
              <span>Your cart subtotal:</span>
              <span>${totalPrice()}</span>
            </div>
            <div className="flex justify-between text-[#233a5e]">
              <span>Shipping fees:</span>
              <span>$4.99</span>
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
            <label className="text-xl font-semibold text-[#233a5e]">
              <sup>$</sup>
              {totalPrice() + 4.99}
            </label>
            <Link to={"/checkout"}>
              <button className="bg-[#ffb603] text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
