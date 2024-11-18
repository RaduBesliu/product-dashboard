import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import searchReducer from "./searchSlice";
import productDetailsReducer from "./productDetailsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    search: searchReducer,
    productDetails: productDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
