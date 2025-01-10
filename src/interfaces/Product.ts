// Interface para la lista de productos
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



// Interface para el detalle de un producto
export interface ProductDetail extends ProductListItem {
  specifications: { name: string; value: string }[];
}