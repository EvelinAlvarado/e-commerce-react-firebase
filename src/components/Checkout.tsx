// src/components/Checkout.tsx
import { useForm } from "react-hook-form";
import { useCart } from "../context/CustomHooks";
import { useNavigate } from "react-router-dom";
import { FormValuesTypes } from "../types/FormValuesTypes";
import { OrderTypes } from "../types/OrderType";
import { postOrderToFirestore } from "../helpers/firebaseService";

export const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesTypes>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormValuesTypes) => {
    console.log("Form data:", data);
    const order: OrderTypes = {
      client: data,
      products: cartItems,
      totalPrice: totalPrice() + 4.99,
    };
    console.log("Order data: ", order);
    try {
      //Save the order in Firestore
      await postOrderToFirestore(order);

      clearCart();
      // Redirigir al usuario a una página de confirmación o inicio
      navigate("/thank-you");
    } catch (error) {
      console.error("Error saving order:", error);
    }

    // Redirigir al usuario a una página de confirmación o inicio
    navigate("/thank-you");
  };

  if (cartItems.length === 0) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        <div>Your cart is empty!</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xs md:max-w-md mx-auto py-10 ">
      <h2 className="text-2xl font-semibold text-[#233a5e] mb-6">Checkout</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-[#233a5e]" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-[#233a5e]" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-[#233a5e]" htmlFor="address">
            Address
          </label>
          <input
            id="address"
            {...register("address", { required: "Address is required" })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>
        <div className="flex justify-between text-[#233a5e] font-semibold mb-4">
          <span>Total Price:</span>
          <span>${totalPrice() + 4.99}</span>
        </div>
        <button
          type="submit"
          className="w-full bg-[#ffb603] text-white font-bold py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
};
