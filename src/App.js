import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showModalCart = () => setShowCart(true);
  const closeModalCart = () => setShowCart(false);
  return (
    <CartProvider>
      {showCart && <Cart showCart={showModalCart} closeCart={closeModalCart} />}
      <Header showCart={showModalCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
