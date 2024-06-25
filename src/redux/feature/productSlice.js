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
  favoriteProducts: [],
  cartProducts: [],
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
    setFavoriteProducts: (state, action) => {
      state.favoriteProducts = action.payload;
    },
    setCartProducts: (state, action) => {
      state.cartProducts = action.payload;
    },
  },
});

export const getOurProducts = (state) => state.products.product;
export const getFilterProducts = (state) => state.products.filterProducts;
export const getFilterColor = (state) => state.products.filteredColor;
export const getFavProducts = (state) => state.products.favoriteProducts;
export const getCartProducts = (state) => state.products.favoriteProducts;
export const getFilteredRangePrice = (state) =>
  state.products.filteredRangePrice;

export const {
  setOurProducts,
  setFilterProducts,
  setFilteredColor,
  setFilteredRangePrice,
  setFavoriteProducts,
  setCartProducts,
} = productSlice.actions;
export default productSlice.reducer;
