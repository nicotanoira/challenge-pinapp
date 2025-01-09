import { Product } from "@/interfaces/Product";
import axios from "axios";

export const fetchProducts = async (query: string): Promise<Product[]> => {
  try {
    const response = await axios.get("http://localhost:4000/products", {
      params: { search: query },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
};
