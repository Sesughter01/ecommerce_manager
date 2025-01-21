import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PriceRange {
  min: number;
  max: number;
}

interface ShopList {
  price: PriceRange;
  category: string[];
  categorySelect: string;
  color: string[];
  colorSelect: string;
  brand: string[];
  brandSelect: string;
}

interface PerPage {
  start: number;
  end: number;
}

interface ShopSort {
  sort: string;
  perPage: PerPage;
}

interface FilterState {
  shopList: ShopList;
  shopSort: ShopSort;
}

const initialState: FilterState = {
  shopList: {
    price: {
      min: 0,
      max: 100,
    },
    category: [],
    categorySelect: "",
    color: [],
    colorSelect: "",
    brand: [],
    brandSelect: "",
  },
  shopSort: {
    sort: "",
    perPage: {
      start: 0,
      end: 0,
    },
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addPrice: (state, action: PayloadAction<PriceRange>) => {
      state.shopList.price.min = action.payload.min;
      state.shopList.price.max = action.payload.max;
    },

    addCategory: (state, action: PayloadAction<string>) => {
      const isExist = state.shopList.category.includes(action.payload);
      if (!isExist) {
        state.shopList.category.push(action.payload);
      } else {
        state.shopList.category = state.shopList.category.filter(
          (item) => item !== action.payload
        );
      }
    },
    clearCategory: (state) => {
      state.shopList.category = [];
    },

    addColor: (state, action: PayloadAction<string>) => {
      const isExist = state.shopList.color.includes(action.payload);
      if (!isExist) {
        state.shopList.color.push(action.payload);
      } else {
        state.shopList.color = state.shopList.color.filter(
          (item) => item !== action.payload
        );
      }
    },
    clearColor: (state) => {
      state.shopList.color = [];
    },

    addBrand: (state, action: PayloadAction<string>) => {
      const isExist = state.shopList.brand.includes(action.payload);
      if (!isExist) {
        state.shopList.brand.push(action.payload);
      } else {
        state.shopList.brand = state.shopList.brand.filter(
          (item) => item !== action.payload
        );
      }
    },
    clearBrand: (state) => {
      state.shopList.brand = [];
    },

    addSort: (state, action: PayloadAction<string>) => {
      state.shopSort.sort = action.payload;
    },

    addPerPage: (state, action: PayloadAction<PerPage>) => {
      state.shopSort.perPage.start = action.payload.start;
      state.shopSort.perPage.end = action.payload.end;
    },
  },
});

export const {
  addPrice,
  addCategory,
  clearCategory,
  addColor,
  clearColor,
  addBrand,
  clearBrand,
  addSort,
  addPerPage,
} = filterSlice.actions;

export default filterSlice.reducer;
