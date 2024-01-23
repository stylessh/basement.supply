import { cn } from "@/lib/utils";
import { Sizes } from "@/types/data";

interface CartItemSizeSelectorProps {
  sizes: Sizes[];
  selectedSize?: Sizes;

  onSizeChange: (size: Sizes) => void;
}

const CartItemSizeSelector = ({
  sizes,
  selectedSize,
  onSizeChange,
}: CartItemSizeSelectorProps) => {
  return (
    <div className="flex items-center gap-x-2">
      {sizes.map((size) => (
        <button
          key={size.name}
          onClick={() => onSizeChange(size)}
          className={cn(
            "px-2 py-0.5 border border-transparent rounded-full text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed",
            {
              "border-white": size.name === selectedSize?.name,
            }
          )}
          disabled={size.stock === 0}
        >
          {size.name}
        </button>
      ))}
    </div>
  );
};

export default CartItemSizeSelector;
