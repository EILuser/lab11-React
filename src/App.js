import PizzaCard from "./components/PizzaCard";
import pizzaImage from "./images/pizza.jpg";

function App() {
  return (
    <PizzaCard title="Пепперони" text="Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла" price="550 ₽" image={pizzaImage}/>
  );
}

export default App;