import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Order food of varieties</h2>
      <p>
        KhajaGhar is the fastest, easiest and most convenient way to enjoy the
        best food of your favourite restaurants at home, at the office or
        wherever you want to.
      </p>
      <p>
        We know that your time is valuable and sometimes every minute in the day
        counts. That’s why we deliver! So you can spend more time doing the
        things you love.
      </p>
    </section>
  );
};

export default MealsSummary;
