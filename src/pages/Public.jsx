import { useContext } from "react";

import { WebshopContex } from "../contexts/webshop-context";
import Card from "../components/Card";
import Cart from "../components/Cart";
import CategoriesSelect from "../components/CategoriesSelect";

const Public = () => {
  const { items } = useContext(WebshopContex);

  return (
    <div className="main-page">
      <div>
        <CategoriesSelect />
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
      </div>
      <Cart />
    </div>
  );
};

export default Public;
