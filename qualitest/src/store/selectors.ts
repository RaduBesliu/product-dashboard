import { RootState } from "../store";

export const selectFilteredProducts = (state: RootState) => {
  const { products } = state.products;
  const { term: search } = state.search;

  const totalProducts = products.length;

  if (!search.trim()) {
    return {
      filteredProducts: products,
      allFetched: true,
    };
  }

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
  );

  return {
    filteredProducts,
    allFetched: filteredProducts.length === totalProducts,
  };
};

export const selectFavorites = (state: RootState) => state.favorites.items;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
