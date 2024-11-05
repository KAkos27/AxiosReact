import { useContext } from "react";
import { WebshopContex } from "../store/webshop-context";

const Card = ({ image, title, description, price, id }) => {
  const { addItemToCart } = useContext(WebshopContex);

  return (
    <div className="card">
      <img src={image} />
      <h3>{title}</h3>
      <details>
        <summary>Leírás</summary>
        <p>{description}</p>
      </details>
      <strong>$ {price}</strong>
      <button onClick={() => addItemToCart(id)}>Kosárba</button>
    </div>
  );
};

export default Card;
