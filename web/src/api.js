import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:3000",
});

export async function fetchProducts(params = {}) {
  const { data } = await api.get("/products", { params });
  return data; // { items, total, page, pages }
}
