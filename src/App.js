import { useState } from "react";
import baseURL from "./backend/baseURL.js";
import AddMeals from "./components/Cart/AddMeals";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import useHttp from "./hooks/use-http";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showModalCart = () => setShowCart(true);
  const closeModalCart = () => setShowCart(false);

  const [addMeal, setShowAddMeal] = useState(false);
  const showAddMeal = () => setShowAddMeal(true);
  const closeAddMeal = () => setShowAddMeal(false);

  const { sendRequest } = useHttp();

  const sendData = (data) => {
    const newData = { ...data, price: Number(data.price) };
    sendRequest({
      url: `${baseURL}/meals.json`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
  };

  return (
    <CartProvider>
      {showCart && <Cart showCart={showModalCart} closeCart={closeModalCart} />}
      {addMeal && (
        <AddMeals
          showCart={showAddMeal}
          closeCart={closeAddMeal}
          formValue={sendData}
        />
      )}
      <Header showCart={showModalCart} showAddMeal={showAddMeal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
