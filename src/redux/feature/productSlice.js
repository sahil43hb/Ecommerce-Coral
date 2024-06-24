import { createSlice } from "@reduxjs/toolkit";
import {
  ExploreSectionData,
  initialFilterColor,
} from "../../utilities/data/ExploreSection";

const initialValue = {
  product: ExploreSectionData,
  filterProducts: ExploreSectionData,
  filteredColor: initialFilterColor,
  filteredRangePrice: [1, 250],
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
    setFilteredRangePrice: (state, action) => {
      state.filteredRangePrice = action.payload;
    },
  },
});

export const getOurProducts = (state) => state.products.product;
export const getFilterProducts = (state) => state.products.filterProducts;
export const getFilterColor = (state) => state.products.filteredColor;
export const getFilteredRangePrice = (state) =>
  state.products.filteredRangePrice;

export const {
  setOurProducts,
  setFilterProducts,
  setFilteredColor,
  setFilteredRangePrice,
} = productSlice.actions;
export default productSlice.reducer;
