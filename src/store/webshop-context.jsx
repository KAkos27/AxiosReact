import { createContext, useEffect, useState } from "react";
import { fetchItems } from "../http";

export const WebshopContex = createContext({
  items: [],
  cart: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

export const WebshopContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

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

  const addItemToCart = (id) => {
    const itemToAdd = items.find((item) => item.id === id);

    setCart((prevCart) => [itemToAdd, ...prevCart]);
  };

  const contextValue = {
    items,
    cart,
    addItemToCart,
    updateItemQuantity: () => {},
  };

  return (
    <WebshopContex.Provider value={contextValue}>
      {children}
    </WebshopContex.Provider>
  );
};
