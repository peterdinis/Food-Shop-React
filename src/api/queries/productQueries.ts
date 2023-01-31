import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL as string
});

export const getAllProducts = () => api.get("products").then((res) => res.data);

export const getOneProduct = (id: number) => {
  if(!id) {
    return;
  }

  return api.get(`product/${id}`).then((res) => res.data);
}