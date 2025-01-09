"use client";
import { useSearch } from "@/context/SearchContext";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/interfaces/Product";

// import { GetServerSideProps } from "next";
import { fetchProducts } from "@/api/productService";
import { Card } from "antd";

const ProductCollection: React.FC = () => {
  const { searchInputText, setLoading, loading } = useSearch();
  const [items, setItems] = useState<Product[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const executeSearch = async (text: string) => {
      setLoading(true);
      setError(null); // Reset error before starting a new search

      try {
        const results = await fetchProducts(text);
        setItems(results);
      } catch (error) {
        if (error instanceof Error) {
          throw new Error("Error fetching products: " + error.message);
        } else {
          throw new Error("Error fetching products");
        }
      } finally {
        setLoading(false);
      }
    };

    if (searchInputText) {
      executeSearch(searchInputText);
    } else {
      setItems([]);
    }
  }, [searchInputText, setLoading]);

  return (
    <>
      <h1 className="text-black font-extrabold text-2xl md:text-5xl lg:text-5xl mb-8 max-w-[300px] w-full">
        Products
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 h-full justify-items-center">
        {!loading &&
          items.map((product: Product) => (
            <div
              className="w-full max-w-[300px] justify-center"
              key={product.sku}
            >
              <ProductCard product={product} />
            </div>
          ))}
      </div>
      {loading && <div className="h-full flex w-full gap-8">
        <Card
          className="w-full max-w-[300px] justify-center h full"
          loading={loading}
        />
        <Card
          className="w-full max-w-[300px] justify-center h full"
          loading={loading}
        />
        <Card
          className="w-full max-w-[300px] justify-center h full"
          loading={loading}
        />
        <Card
          className="w-full max-w-[300px] justify-center h full"
          loading={loading}
        />
      </div>}
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//   const searchQuery = query.search || ""; // If no search query, fetch all products

//   try {
//     // Fetch products based on the search query or fetch all if no query
//     const products = await fetchProducts(searchQuery as string);

//     return {
//       props: {
//         products, // Pass the fetched products as props
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching products on SSR:", error);
//     return {
//       props: {
//         products: [], // Return empty array if there's an error
//       },
//     };
//   }
// };

export default ProductCollection;
