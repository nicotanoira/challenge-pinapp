import Navbar from "@/components/NavBar";
import ProductCollection from "@/components/ProductCollection";

export default function Home() {
  
  return (
    <div className="w-full h-full flex flex-col items-center gap-8 mb-8">
      <Navbar />
      <section className="flex w-[70%] h-full lg:w-[70%] flex-col items-center md:items-start">
        <ProductCollection />
      </section>
      <footer>
        PinApp C - 2025 Challenge
      </footer>
    </div>
  );
}
