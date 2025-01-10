// src/app/products/[sku]/page.tsx

// import { Metadata } from "next";
import AddToCartButton from "@/components/AddToCartButton";
import type { ProductDetail } from "@/interfaces/Product";
import Image from "next/image";
import Chip from "./Chip";
import SpecList from "./SpecList";

// Generación de metadatos dinámicos (opcional)
// export async function generateMetadata({
//   params,
// }: ProductDetailPageProps): Promise<Metadata> {
//   const product = await fetchProductDetails(params.sku);
//   return { title: product.name };
// }

interface ProductDetailViewProps {
  product: ProductDetail | null;
}

const ProductDetailView = async ({ product }: ProductDetailViewProps) => {
  return (
    <div className="w-[80%] flex-col lg:flex-row h-full p-8 flex justify-around items-center bg-white  rounded-lg  gap-8">
      <Image
        width={450}
        height={450}
        src={product?.image || "/default-image.jpg"}
        alt={product?.name || "Product Image"}
        className="md:w-[450px] md:h-[450px] object-contain flex-1 "
      />
      <div className="border-t md:border-t-0 md:border-l pt-4 md:pt-0 h-full flex-[0_0_45%] flex flex-col gap-4 px-4 justify-between">
        <div className="mb-4 flex flex-col-reverse md:flex-col">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
            <span className="text-gray-500 text-3xl font-medium">
              {product?.brand}
            </span>
            <Chip
              text={product?.category.name ?? ""}
              size="md:text-[20px] md:px-4 py-1 md:py-2 mr-[-16px]"
            />
          </div>
          <h1 className="text-3xl font-bold mb-1">{product?.name}</h1>
        </div>

        <span className="text-5xl font-semibold w-full pb-1 truncate">
          $ {product?.price.toLocaleString("es-AR")}
        </span>
        <div className="flex justify-between gap-2 items-end w-full">
          <h2 className="font-semibold text-lg mt-4">Especificaciones</h2>
          <span className="text-gray-500 text-base text-nowrap font-medium">
            SKU: {product?.sku}
          </span>
        </div>
        <SpecList specList={product?.specifications || []} />
        <AddToCartButton name={product?.name || ""} />
      </div>
    </div>
  );
};

export default ProductDetailView;
