import { cn } from "@/lib/utils";
import { Sizes } from "@/types/data";

interface CartItemSizeSelectorProps {
  selectedSize?: Sizes;

  onSizeChange: (size: Sizes) => void;
}

const CartItemSizeSelector = ({
  selectedSize,
  onSizeChange,
}: CartItemSizeSelectorProps) => {
  // putting sizes statically for now
  const sizes = [
    { name: "S", stock: 0 },
    { name: "M", stock: 5 },
    { name: "L", stock: 2 },
  ];

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
