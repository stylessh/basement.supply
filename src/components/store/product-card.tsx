import Image from "next/image";
import AddToCart from "./add-to-cart";
import { formatPrice } from "@/lib/utils";
import { ProductItem } from "@/actions/products";

interface ProductCardProps {
  product: ProductItem;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article key={product._id} className="group">
      <figure className="relative p-4 grid place-items-center bg-gradient-to-t from-[#FAFAFA]/10 to-black h-full border-white border-b-2 overflow-hidden">
        <Image
          src={product.image.rawUrl}
          alt={product.name}
          width={480}
          height={640}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />

        {/* add to cart overlay */}
        <AddToCart product={product} />
      </figure>

      <figcaption className="flex items-center justify-between font-bold mt-2">
        <h2>{product.name}</h2>
        <p>{formatPrice(product.price)}</p>
      </figcaption>
    </article>
  );
};

export default ProductCard;
