import { useContext } from "react";
import { WebshopContex } from "../store/webshop-context";
import Card from "./Card";
import Cart from "./Cart";

const MainPage = () => {
  const { items } = useContext(WebshopContex);

  return (
    <div className="main-page">
      <div className="cards">
        {items.map((item, i) => (
          <Card
            key={i}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
      <Cart />
    </div>
  );
};

export default MainPage;
