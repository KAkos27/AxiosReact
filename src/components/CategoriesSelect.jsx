import { useContext } from "react";
import { WebshopContex } from "../contexts/webshop-context";

const CategoriesSelect = () => {
  const { categories } = useContext(WebshopContex);

  return (
    <select>
      {categories.map((category, i) => (
        <option key={i}>{category}</option>
      ))}
    </select>
  );
};

export default CategoriesSelect;
