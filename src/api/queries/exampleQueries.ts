import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL as string
});

export const getExampleQuery = () => api.get("example").then((res) => res.data);
