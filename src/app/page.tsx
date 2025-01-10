import { fetchProducts } from "@/api/productService";
import ErrorView from "@/components/ErrorView";
import PageContentContainer from "@/components/PageContentContainer";
import ProductCollection from "@/components/ProductCollection";
import { ProductListItem } from "@/interfaces/Product";
import getUniqueCategories, { Category } from "@/utils/getUniqueCategories";

const Home = async () => {
  let initialProducts: ProductListItem[] = [];
  let allCategories: Category[] = []

  try {
    initialProducts = (await fetchProducts({ pageParam: 0, query: "" })) ?? [];
    allCategories = getUniqueCategories(initialProducts);
  } catch (error) {
    return (
      <ErrorView
        errorMessage={error instanceof Error ? error.message : "An unknown error occurred"}
      />
    );
  }
  
  return (
    <PageContentContainer>

        <section className="flex-1 flex  w-[300px] h-full md:w-[70%] flex-col items-center md:items-start">
          <ProductCollection products={initialProducts} filterCategories={allCategories} />
        </section> 

    </PageContentContainer>
  );
}

export default Home;
