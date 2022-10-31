import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";
import baseURL from "../../backend/baseURL";
import { toast } from "react-toastify";

const AvailableMeals = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const transForm = (initialObj) => {
      const loadedMeals = [];
      for (const meal in initialObj) {
        loadedMeals.push({
          id: meal,
          name: initialObj[meal].name,
          description: initialObj[meal].description,
          price: initialObj[meal].price,
        });
      }
      setMeals(loadedMeals);
    };

    sendRequest({ url: `${baseURL}/meals.json` }, transForm);
  }, [sendRequest]);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let content = "No Meals Found. Try Adding Meals";
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>{"Loading Data..."}</p>;
  }
  if (!isLoading && mealsList.length > 0) {
    content = <ul>{mealsList}</ul>;
  }

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
