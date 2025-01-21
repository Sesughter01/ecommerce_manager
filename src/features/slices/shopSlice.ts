import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@/shared/types/cart";
import { toast } from "react-toastify";

// type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   qty: number;
//   [key: string]: any;
// };

type ShopState = {
  cart: CartItem[];
};

const initialState: ShopState = {
  cart: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<{ product: CartItem; qty?: number }>) => {
      const { product, qty } = action.payload;
      const isCartExist = state.cart.some((item) => item.id === product.id);

      if (!isCartExist) {
        state.cart.push({
          ...product,
          qty: qty ? qty : 1,
        });
        toast.success("This item added to cart.");
      } else {
        toast.error("This item is already in the cart.");
      }

      localStorage.setItem("local-cart", JSON.stringify(state.cart));
    },
    deleteCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("local-cart", JSON.stringify(state.cart));
      toast.error(`Item ${action.payload} has been deleted.`);
    },
    addQty: (state, action: PayloadAction<{ id: number; qty: number }>) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: action.payload.qty };
        }
        return item;
      });
      localStorage.setItem("local-cart", JSON.stringify(state.cart));
    },
    reloadCart: (state) => {
      const cart = localStorage.getItem("local-cart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
  },
});

export const { addCart, deleteCart, addQty, reloadCart } = shopSlice.actions;
export default shopSlice.reducer;
