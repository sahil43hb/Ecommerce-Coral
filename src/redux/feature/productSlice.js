import { createSlice } from "@reduxjs/toolkit";
import {
  ExploreSectionData,
  initialFilterColor,
} from "../../utilities/data/ExploreSection";

const initialValue = {
  product: ExploreSectionData,
  filterProducts: ExploreSectionData,
  filteredColor: initialFilterColor,
  filteredRange: [1, 250],
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialValue,
  reducers: {
    setOurProducts: (state, action) => {
      state.product = action.payload;
    },
    setFilterProducts: (state, action) => {
      state.filterProducts = action.payload;
    },
    setFilteredColor: (state, action) => {
      state.filteredColor = action.payload;
    },
    setFilteredRange: (state, action) => {
      state.filteredRange = action.payload;
    },
  },
});

export const getOurProducts = (state) => state.products.product;
export const getFilterProducts = (state) => state.products.filterProducts;
export const getFilterColor = (state) => state.products.filteredColor;
export const getFilteredRange = (state) => state.products.filteredRange;

export const {
  setOurProducts,
  setFilterProducts,
  setFilteredColor,
  setFilteredRange,
} = productSlice.actions;
export default productSlice.reducer;
