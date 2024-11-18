import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductDto } from "../api/types.dto";
import { getProducts } from "../api";

interface ProductsState {
  products: ProductDto[];
  loading: boolean;
  error: string | null;
  search: string;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  search: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ limit = 20, skip = 0 }: { limit?: number; skip?: number }) => {
    const products = await getProducts({ limit, skip });
    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm(state, action: { payload: string }) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const { setSearchTerm } = productsSlice.actions;
export default productsSlice.reducer;
