import { createContext, useEffect, useState } from "react";

import { fetchCategories, fetchItems, postItem } from "../http";

export const WebshopContex = createContext({
  items: [],
  categories: [],
  cart: [],
  createItem: () => {},
  onDeleteItem: () => {},
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

export const WebshopContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchItemsData = async (requestMethod, setMethod) => {
      try {
        const data = await requestMethod();
        setMethod(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItemsData(fetchItems, setItems);
    fetchItemsData(fetchCategories, setCategories);
  }, []);

  const createItem = async (data) => {
    try {
      await postItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => {
      const copiedItems = [...prevItems];

      return copiedItems.filter((item) => id != item.id);
    });
  };

  const addItemToCart = (id) => {
    const itemToAdd = items.find((item) => item.id === id);

    setCart((prevCart) => [itemToAdd, ...prevCart]);
  };

  const contextValue = {
    items,
    categories,
    cart,
    createItem,
    onDeleteItem: handleDeleteItem,
    addItemToCart,
    updateItemQuantity: () => {},
  };

  return (
    <WebshopContex.Provider value={contextValue}>
      {children}
    </WebshopContex.Provider>
  );
};
