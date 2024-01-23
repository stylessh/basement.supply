import Hero from "@/components/hero";
import ProductList from "@/components/store/product-list";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <Hero />
      <ProductList />
    </main>
  );
}
