import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import ProductsPage from "./index";
import { fetchProducts } from "../../store/productsSlice";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock("../../store/productsSlice", () => ({
  fetchProducts: jest.fn(),
}));

describe("ProductsPage", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      products: {
        products: [],
        loading: false,
        error: null,
      },
      search: {
        term: "",
      },
      cart: {
        items: [],
      },
      favorites: {
        items: [],
      },
      productDetails: {
        product: null,
        loading: false,
        error: null,
      },
    });
    store.dispatch = jest.fn();
  });

  it("dispatches fetchProducts on mount", () => {
    render(
      <Provider store={store}>
        <ProductsPage />
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledWith(
      fetchProducts({ limit: 20, skip: 0 })
    );
  });

  it("loads more products on scroll to bottom", () => {
    render(
      <Provider store={store}>
        <ProductsPage />
      </Provider>
    );

    fireEvent.scroll(window, {
      target: { scrollY: document.documentElement.scrollHeight },
    });

    expect(store.dispatch).toHaveBeenCalledWith(
      fetchProducts({ limit: 20, skip: 20 })
    );
  });
});
