import { ProductItem } from "@/actions/products";
import { CartItem, Sizes } from "@/types/data";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CartStore {
  items: CartItem[];
  addItem: (item: ProductItem) => void;
  removeItem: (item: ProductItem) => void;

  updateSize: (item: ProductItem, size: Sizes) => void;

  itemsCount: number;
  totalPrice: number;
}

// The persist middleware will save the state in localStorage
// and rehydrate it when the app is reloaded.

const cartPersist = persist<CartStore>(
  (set, get) => ({
    items: [],
    addItem: (item) => {
      // check if item already exists in cart to add quantity
      const itemExists = get().items.find((i) => i._id === item._id);

      // if exists, we update the quantity only
      if (itemExists) {
        set((state) => ({
          items: state.items.map((i) =>
            i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
          ),

          totalPrice: state.totalPrice + item.price,
        }));

        return;
      }

      // if not, we add it to the cart as new item
      set((state) => ({
        items: [...state.items, { ...item, quantity: 1 }],
        itemsCount: state.itemsCount + 1,
        totalPrice: state.totalPrice + item.price,
      }));
    },

    removeItem: (item) => {
      // check the quantity of the item to decrease it
      const itemExists = get().items.find((i) => i._id === item._id);

      if (!itemExists) return;

      // if exists, we update the quantity only
      if (itemExists.quantity > 1) {
        set((state) => ({
          items: state.items.map((i) =>
            i._id === item._id ? { ...i, quantity: i.quantity - 1 } : i
          ),

          totalPrice: state.totalPrice - item.price,
        }));

        return;
      }

      // if quantity is 0, we remove the item from the cart
      set((state) => ({
        items: state.items.filter((i) => i._id !== item._id),
        itemsCount: state.itemsCount - 1,
        totalPrice: state.totalPrice - item.price,
      }));
    },

    updateSize: (item, size) => {
      // check if item already exists in cart to add quantity
      const itemExists = get().items.find((i) => i._id === item._id);

      if (!itemExists) return;

      // if exists, we update the selectedSize only
      set((state) => ({
        items: state.items.map((i) =>
          i._id === item._id ? { ...i, selectedSize: size } : i
        ),
      }));

      return;
    },

    itemsCount: 0,
    totalPrice: 0,
  }),
  {
    name: "cart-storage",
    storage: createJSONStorage(() => ({
      // Returning a promise from getItem is necessary to avoid issues with hydration
      getItem: async (name: string) => localStorage.getItem(name),
      setItem: (name: string, value: string) =>
        localStorage.setItem(name, value),
      removeItem: (name: string) => localStorage.removeItem(name),
    })),
  }
);

export const useCartStore = create<CartStore>()(cartPersist);
