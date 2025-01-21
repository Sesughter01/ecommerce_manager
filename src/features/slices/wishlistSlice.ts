import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WishlistItem  } from "@/shared/types/wishlistItem";
import { toast } from "react-toastify";

// type WishlistItem = {
//   id: number;
//   name: string;
//   price: number;
//   qty: number;
//   [key: string]: any;
// };

type WishlistState = {
  wishlist: WishlistItem[];
};

const initialState: WishlistState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action: PayloadAction<{ product: WishlistItem; qty?: number }>) => {
      const { product, qty } = action.payload;
      const isWishlistExist = state.wishlist.some((item) => item.id === product.id);

      if (!isWishlistExist) {
        state.wishlist.push({
          ...product,
          qty: qty ? qty : 1,
        });
        toast.success("This item added to Wishlist.");
      } else {
        toast.error("This item is already in the Wishlist.");
      }

      localStorage.setItem("local-wishlist", JSON.stringify(state.wishlist));
    },
    deleteWishlist: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
      localStorage.setItem("local-wishlist", JSON.stringify(state.wishlist));
      toast.error(`Item ${action.payload} has been deleted.`);
    },
    addQty: (state, action: PayloadAction<{ id: number; qty: number }>) => {
      state.wishlist = state.wishlist.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: action.payload.qty };
        }
        return item;
      });
      localStorage.setItem("local-wishlist", JSON.stringify(state.wishlist));
    },
    reloadWishlist: (state) => {
      const wishlist = localStorage.getItem("local-wishlist");
      if (wishlist) {
        state.wishlist = JSON.parse(wishlist);
      }
    },
  },
});

export const { addWishlist, deleteWishlist, addQty, reloadWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
