"use client";
import { useSearch } from "@/context/SearchContext";
import React, { useEffect, useState } from "react";
import ProductCollectionCard from "./ProductCollectionCard";
import { ProductListItem } from "@/interfaces/Product";

import { fetchProducts } from "@/api/productService";
import { Card } from "antd";
import { Category } from "@/utils/getUniqueCategories";
import Chip from "./Chip";
import ErrorView from "./ErrorView";

interface ProductCollectionProps {
  products: ProductListItem[];
  filterCategories: Category[];
}

const ProductCollection: React.FC<ProductCollectionProps> = ({
  products,
  filterCategories,
}) => {
  const { searchInputText, setLoading, loading } = useSearch();
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<ProductListItem[]>(products);
  const [error, setError] = useState<string | null>(null);

  const toggleCategory = (category: Category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((cat) => cat.id !== category.id)
        : [...prevSelected, category]
    );
  };

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setItems(products);
      return;
    }
    setItems(
      products.filter((product) =>
        selectedCategories.some((cat) => cat.id === product.category.id)
      )
    );
  }, [selectedCategories, products]);

  useEffect(() => {
    const executeSearch = async (text: string) => {
      setLoading(true);
      setError(null);

      try {
        if (text) {
          const results = await fetchProducts({ query: text });
          setItems(results);
        } else {
          setItems(products);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    executeSearch(searchInputText);
  }, [searchInputText, setLoading, products]);

  return (
    <div className="w-full h-full">
      <>
        <div className="flex-col md:flex-row flex justify-between items-center w-full gap-4 md:mb-6">
          <h1 className="flex-1 text-black font-extrabold text-2xl md:text-5xl lg:text-5xl max-w-[300px] w-full">
            Products
          </h1>
          <div className="flex flex-[0_0_55%] gap-2 flex-wrap h-full md:justify-end items-center text-center">
            {filterCategories?.map((category) => (
              <Chip
                text={category.name}
                key={category.id}
                size="text-[12px] md:text-[16px] py-1 px-2 md:py-2 md:px-4"
                onClick={() => toggleCategory(category)}
                customStyle={
                  selectedCategories.includes(category)
                    ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600 hover:border-blue-600"
                    : "hover:border-blue-600 hover:text-blue-600 border-blue-500 text-blue-500"
                }
              />
            ))}
          </div>
        </div>
        <span className="text-sm md:text-base text-gray-500 flex w-full justify-end items-center text-center mb-2 pr-2">
          Showing: {items.length} results
        </span>
      </>

          
      {error ? (
        <ErrorView errorMessage={error} />
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 h-full justify-items-center">
          {!loading ? (
            items?.map((product: ProductListItem) => (
              <div
                className="w-full max-w-[300px] justify-center"
                key={product.sku}
              >
                <ProductCollectionCard product={product} />
              </div>
            ))
          ) : 
            [1, 2, 3, 4].map((_, index) => (
              <Card
                key={index}
                className="w-full h-[200px] max-w-[300px] justify-center p-4"
                loading={true}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCollection;
