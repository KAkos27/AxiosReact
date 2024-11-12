import axios from "axios";

const myAxios = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const fetchItems = async () => {
  const data = await myAxios.get("/products");

  return data;
};

export const fetchCategories = async () => {
  const data = await myAxios.get("/products/categories");

  return data;
};

export const postItem = async (data) => {
  const response = await myAxios.post("/products", data);

  return response;
};
