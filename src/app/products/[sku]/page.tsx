// import { Metadata } from "next";
import { fetchProductDetails } from "@/api/productService";
import ErrorView from "@/components/ErrorView";
import PageContentContainer from "@/components/PageContentContainer";
import ProductDetailView from "@/components/ProductDetailView";
import { ProductDetail } from "@/interfaces/Product";

// interface ProductDetailPageProps {
//   params: { sku: string };
// }

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ sku: string }>;
}) => {
  const { sku } = await params;

  let product: ProductDetail | null = null;

  try {
    // This is actually equal to id
    // sku === id
    product = await fetchProductDetails(sku);
  } catch (error) {
    if (error instanceof Error) {
      return <ErrorView errorMessage={error.message} />;
    }
  }

  return (
    <PageContentContainer bgColor="bg-slate-200">
      <ProductDetailView product={product} />
    </PageContentContainer>
  );
};

export default ProductDetailPage;
