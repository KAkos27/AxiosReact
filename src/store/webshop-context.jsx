import { createContext, useEffect, useState } from "react";
import { fetchItems } from "../http";

export const WebshopContex = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

export const WebshopContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const data = await fetchItems();
        setItems(data.data);
      } catch {
        console.log("hiba");
      }
    };

    fetchItemsData();
  }, []);

  console.log(items);
  const contextValue = {
    items: items,
    addItemToCart: () => {},
    updateItemQuantity: () => {},
  };

  return (
    <WebshopContex.Provider value={contextValue}>
      {children}
    </WebshopContex.Provider>
  );
};
