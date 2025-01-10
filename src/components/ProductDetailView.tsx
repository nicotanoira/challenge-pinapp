import AddToCartButton from "@/components/AddToCartButton";
import type { ProductDetail } from "@/interfaces/Product";
import Image from "next/image";
import Chip from "./Chip";
import SpecList from "./SpecList";
import GoBack from "./GoBack";

interface ProductDetailViewProps {
  product: ProductDetail | null;
}

const ProductDetailView = async ({ product }: ProductDetailViewProps) => {
  return (
    <div className="w-[80%] relative flex-col xl:flex-row h-full p-8 flex justify-around items-center bg-white  rounded-lg  gap-8">
      <GoBack />
      <Image
        width={450}
        height={450}
        src={product?.image || "/default-image.jpg"}
        alt={product?.name || "Product Image"}
        className=" object-contain flex-1 md:w-[450px] md:h-[450px]"
        priority 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
      />
      <div className="border-t xl:border-t-0 xl:border-l pt-4 xl:pt-0 h-full lg:flex-[0_0_45%] flex flex-col gap-4 px-4 justify-between">
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

        <span className="text-3xl md:text-5xl font-semibold w-full pb-1 truncate">
          $ {product?.price.toLocaleString("es-AR")}
        </span>
        <div className="flex flex-col-reverse sm:flex-row justify-between gap-2 sm:items-end w-full">
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
