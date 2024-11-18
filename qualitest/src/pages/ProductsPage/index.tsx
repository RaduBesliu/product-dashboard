import { useDispatch, useSelector } from "react-redux";
import { Components } from "./styled";
import { AppDispatch } from "../../store";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../store/productsSlice";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";
import TopNavbar from "./components/TopNavbar";
import { selectFilteredProducts } from "../../store/selectors";
import { ProductDto } from "../../api/types.dto";
import { PRODUCTS_LIMIT } from "../../utils/constants";

const ProductsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredProducts: products, allFetched } = useSelector(
    selectFilteredProducts
  );

  const [skip, setSkip] = useState<number>(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight;

    if (bottom && allFetched) {
      console.log("fetch more products");
      setSkip((prevSkip) => prevSkip + PRODUCTS_LIMIT);
    }
  };

  useEffect(() => {
    dispatch(fetchProducts({ limit: PRODUCTS_LIMIT, skip }));
  }, [dispatch, skip]);

  return (
    <Components.Container>
      <TopNavbar />
      <Components.PageWrapper>
        {products && (
          <Components.ProductsList onScroll={handleScroll}>
            {products.map((product: ProductDto) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Components.ProductsList>
        )}
        <ProductDetails />
      </Components.PageWrapper>
    </Components.Container>
  );
};

export default ProductsPage;
