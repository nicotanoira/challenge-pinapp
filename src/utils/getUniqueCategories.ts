import { ProductListItem } from "@/interfaces/Product";

export type Category = {
  id: string;
  name: string;
};

export default function getUniqueCategories(products: ProductListItem[]) {
  if (!products) return [];
  
  const categories: Category[]  = [];

  products.forEach((product) => {
    const category = product.category;

    const exists = categories.some((cat) => cat.id === category.id);

    if (!exists) {
      categories.push(category);
    }
  });

  return categories;
}