import { CartItem, Product } from "@/types/data";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CartStore {
  items: CartItem[];
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;

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
      const itemExists = get().items.find((i) => i.id === item.id);

      // if exists, we update the quantity only
      if (itemExists) {
        set((state) => ({
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
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
      const itemExists = get().items.find((i) => i.id === item.id);

      // if exists, we update the quantity only
      if (itemExists) {
        set((state) => ({
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
          ),

          totalPrice: state.totalPrice - item.price,
        }));

        return;
      }

      // if not, we remove it from the cart
      set((state) => ({
        items: [...state.items, { ...item, quantity: 1 }],

        itemsCount: state.itemsCount - 1,
        totalPrice: state.totalPrice - item.price,
      }));
    },

    itemsCount: 0,
    totalPrice: 0,
  }),
  {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage),
  }
);

export const useCartStore = create<CartStore>()(cartPersist);
