import { useContext } from "react";

import { WebshopContex } from "../contexts/webshop-context";

const Card = ({ image, title, description, price, id }) => {
  const { addItemToCart } = useContext(WebshopContex);

  return (
    <div className="card">
      <img src={image} />
      <h3>{title}</h3>
      <details>
        <summary>Description</summary>
        <p>{description}</p>
      </details>
      <strong>$ {price}</strong>
      <button onClick={() => addItemToCart(id)}>Add to cart</button>
    </div>
  );
};

export default Card;
