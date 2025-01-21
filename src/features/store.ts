import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import productSlice from "./slices/productSlice";
import shopSlice from "./slices/shopSlice";
import wishlistSlice from "./slices/wishlistSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    filter: filterSlice,
    shop: shopSlice,
    wishlist: wishlistSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
