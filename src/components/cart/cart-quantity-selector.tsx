interface CartItemQuantitySelectorProps {
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

const CartItemQuantitySelector = ({
  quantity,
  onDecrement,
  onIncrement,
}: CartItemQuantitySelectorProps) => {
  return (
    <div className="flex items-center justify-between border border-foreground rounded-full w-20 px-3">
      <button className="font-bold" onClick={onDecrement}>
        -
      </button>

      <span className="font-bold">{quantity}</span>

      <button className="font-bold" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

export default CartItemQuantitySelector;
