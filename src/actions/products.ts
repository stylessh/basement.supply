import products from "@/data/products.json";

export const getProducts = () => {
  // Here we should make a request to the server/cms to get the products
  // For now we just return the products from the json file
  return products;
};
