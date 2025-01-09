"use client";
import React from "react";
import Image from "next/image";
import { Card } from "antd";
import { Product } from "@/interfaces/Product";
import Link from "next/link";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link href={`/products/${product.sku}`} passHref>
      <Card
        hoverable
      >
        <Image
          width={800}
          height={200}
          src={product?.image}
          alt={product?.name}
          className="min-w-[100%] max-w-[100%] h-[200px] object-cover"
        />
        <div className="flex flex-col justify-between items-start px-4 py-2 gap-1" >
          <div className="flex justify-between items-start w-full gap-2 h-[44px]">
            <h2 className="text-[14px] truncated-text line-clamp-2 flex-1">{product?.name}</h2>
            <div className="max-w-[45%] truncate border-blue-500 border-2 text-blue-500 text-[10px] text-nowrap font-semibold py-0.5 px-2 rounded-full mr-[-4px]">
              {product?.category.name}
            </div>
          </div>
          <span className="text-2xl font-semibold w-full pb-1 truncate">$ {product?.price.toLocaleString('es-AR')}</span>
          <div className="flex justify-between items-end w-full h-full gap-2">
            <span className="w-full h-full text-base text-gray-500 truncate">{product?.brand}</span>
            <span className="w-full h-full text-xs text-end bottom-8 text-blue-500 mr-[-4px] min-w-[60px]">Ver detalle</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
