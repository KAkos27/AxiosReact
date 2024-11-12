import { useContext } from "react";

import { WebshopContex } from "../contexts/webshop-context";

const Table = () => {
  const { items, onDeleteItem } = useContext(WebshopContex);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Rating</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i}>
            <td>{item.title}</td>
            <td>$ {item.price}</td>
            <td>{item.category}</td>
            <td>{item.rating.rate}</td>
            <td>
              <button
                onClick={() => onDeleteItem(item.id)}
                className="delete-button"
              >
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
