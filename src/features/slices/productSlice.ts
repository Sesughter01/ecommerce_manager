import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Item = {
  id: number;
  name: string;
  value: string;
  isChecked: boolean;
};

type JobState = {
  latestJob: [];
  categoryList: Item[];
  colorList: Item[];
  brandList: Item[];
};

const initialState: JobState = {
  latestJob: [],
  categoryList: [
    { id: 1, name: "Kids", value: "kids", isChecked: false },
    { id: 2, name: "Mens", value: "mens", isChecked: false },
    { id: 3, name: "Womens", value: "womens", isChecked: false },
  ],
  colorList: [
    { id: 1, name: "Black", value: "black", isChecked: false },
    { id: 2, name: "Blue", value: "blue", isChecked: false },
    { id: 3, name: "Gray", value: "gray", isChecked: false },
    { id: 4, name: "Green", value: "green", isChecked: false },
    { id: 5, name: "Red", value: "red", isChecked: false },
  ],
  brandList: [
    { id: 1, name: "Adidas", value: "adidas", isChecked: false },
    { id: 2, name: "Balenciaga", value: "balenciaga", isChecked: false },
    { id: 3, name: "Balmain", value: "balmain", isChecked: false },
    { id: 4, name: "Burberry", value: "burberry", isChecked: false },
    { id: 5, name: "Chloe", value: "chloe", isChecked: false },
  ],
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    clearCategoryToggle: (state) => {
      state.categoryList.forEach((item) => {
        item.isChecked = false;
      });
    },
    categoryCheck: (state, action: PayloadAction<number>) => {
      state.categoryList.forEach((item) => {
        if (item.id === action.payload) {
          item.isChecked = !item.isChecked;
        }
      });
    },

    clearColorToggle: (state) => {
      state.colorList.forEach((item) => {
        item.isChecked = false;
      });
    },
    colorCheck: (state, action: PayloadAction<number>) => {
      state.colorList.forEach((item) => {
        if (item.id === action.payload) {
          item.isChecked = !item.isChecked;
        }
      });
    },

    clearBrandToggle: (state) => {
      state.brandList.forEach((item) => {
        item.isChecked = false;
      });
    },
    brandCheck: (state, action: PayloadAction<number>) => {
      state.brandList.forEach((item) => {
        if (item.id === action.payload) {
          item.isChecked = !item.isChecked;
        }
      });
    },
  },
});

export const {
  clearCategoryToggle,
  categoryCheck,
  clearColorToggle,
  colorCheck,
  clearBrandToggle,
  brandCheck,
} = jobSlice.actions;

export default jobSlice.reducer;
