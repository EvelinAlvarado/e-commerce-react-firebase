import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { AboutUs } from "./components/AboutUs";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { HomePage } from "./components/Home";
// import { Contacts } from "./components/Contacts";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { ThankYou } from "./components/ThankYou";

function App() {
  return (
    <div className="bg-[#fffefd] min-h-screen flex flex-col">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/products/" element={<ItemListContainer />} />
            <Route path="/products/:category" element={<ItemListContainer />} />
            {/* <Route path="/contact" element={<Contacts />} /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
