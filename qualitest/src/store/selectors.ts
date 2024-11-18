import { RootState } from "../store";

export const selectFilteredProducts = (state: RootState) => {
  const { products } = state.products;
  const { term: search } = state.search;

  if (!search.trim()) return products;

  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
  );
};
