import { createSlice } from "@reduxjs/toolkit";
import { ExploreSectionData } from "../../utilities/data/ExploreSection";

const initialValue = {
  product: ExploreSectionData,
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialValue,
  reducers: {
    setProducts: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
