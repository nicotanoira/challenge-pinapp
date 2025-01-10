// import { Metadata } from "next";
import { fetchProductDetails } from "@/api/productService";
import ErrorView from "@/components/ErrorView";
import PageContentContainer from "@/components/PageContentContainer";
import ProductDetailView from "@/components/ProductDetailView";
import { ProductDetail } from "@/interfaces/Product";

interface ProductDetailPageProps {
  params: { sku: string };
}

// Generación de metadatos dinámicos (opcional)
// export async function generateMetadata({
//   params,
// }: ProductDetailPageProps): Promise<Metadata> {
//   const product = await fetchProductDetails(params.sku);
//   return { title: product.name };
// }

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const { sku } = await params;

  let product: ProductDetail | null = null;

  try {
    product = await fetchProductDetails(sku);
  } catch (error) {
    if (error instanceof Error) {
      return (
        <ErrorView
          errorMessage={error.message}
        />
      );
    }
  }

  return (
    <PageContentContainer bgColor="bg-slate-200">
      <ProductDetailView product={product} />
    </PageContentContainer>
  );
};

export default ProductDetailPage;
