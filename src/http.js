import axios from "axios";

const myAxios = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const fetchItems = async () => {
  const data = await myAxios.get("/products");

  return data;
};
