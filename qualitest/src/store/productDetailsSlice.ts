import { createSlice } from "@reduxjs/toolkit";
import { ProductDto } from "../api/types.dto";

interface ProductDetailsState {
  product?: ProductDto;
}

const initialState: ProductDetailsState = {
  product: undefined,
};

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    setProductDetails(state, action) {
      state.product = action.payload;
    },
  },
});

export const { setProductDetails } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
