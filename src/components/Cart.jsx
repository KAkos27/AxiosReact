import { useContext } from "react";

import { WebshopContex } from "../contexts/webshop-context";

const Cart = () => {
  const { cart } = useContext(WebshopContex);
  return (
    <div className="cart">
      {cart.map((item, i) => (
        <div key={i} className="card">
          <img src={item.image} />
          <h3>{item.title}</h3>
          <strong>$ {item.price}</strong>
        </div>
      ))}
    </div>
  );
};

export default Cart;
