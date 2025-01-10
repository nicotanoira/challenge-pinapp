// Lista de productos PLP
export interface ProductListItem {
  id: number;
  sku: string;
  name: string;
  description: string;
  image: string;
  category: { id: string; name: string };
  brand: string;
  price: number;
  stock: number;
}



// Detalle de producto PDP
export interface ProductDetail extends ProductListItem {
  specifications: { name: string; value: string }[];
}