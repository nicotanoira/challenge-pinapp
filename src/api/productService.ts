import { ProductListItem } from "@/interfaces/Product";
import axios from "axios";

export const fetchProducts = async ({
  pageParam = 0,
  query = "",
}: {
  pageParam?: number;
  query?: string;
}): Promise<ProductListItem[]> => {
  try {
    const response = await axios.get("http://localhost:3001/products", {
      params: { page: pageParam, size: 10 },
    });
    const products: ProductListItem[] = response.data;

    if (query) {
      const filteredProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.sku.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredProducts.length === 0) {
        throw new Error("No encontramos resultados con esa busqueda.")
      }
      return filteredProducts;
    }

    return products;
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;

      if (status === 404) {
        throw new Error(status.toString() + ": Productos no encontrados");
      } else if (status === 500) {
        throw new Error(status.toString() + ": No se pudo cargar");
      } else {
        throw new Error("An unexpected error occurred");
      }
    } else {
      throw new Error("We couldn't find any results for your search.");
    }
  }
};

export const fetchProductDetails = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:3001/products/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;

      if (status === 404) {
        throw new Error(status.toString() + ": Producto no encontrado");
      } else if (status === 500) {
        throw new Error(status.toString() + ": No se pudo cargar");
      } else {
        throw new Error("An unexpected error occurred");
      }
    } else {
      throw new Error("An error occurred while fetching product details");
    }
  }
};
