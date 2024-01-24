import React from "react";
import { getProducts } from "@/actions/products";
import ProductCard from "./product-card";

const ProductList = async () => {
  const products = await getProducts();

  return (
    <section className="container my-20 grid grid-cols-1 md:grid-cols-3 gap-10">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
