import { ProductListItem } from "@/interfaces/Product";

export type Category = {
  id: string;
  name: string;
};

export default function getUniqueCategories(products: ProductListItem[]) {
  if (!products) return [];
  
  const categories: Category[]  = [];

  products.forEach((product) => {
    const category = product.category; // Extract category from product

    // Check if the category already exists in the array
    const exists = categories.some((cat) => cat.id === category.id);

    if (!exists) {
      categories.push(category); // Add unique category to the array
    }
  });

  return categories;
}