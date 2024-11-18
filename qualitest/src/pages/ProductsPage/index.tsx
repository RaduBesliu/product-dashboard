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

const ProductsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectFilteredProducts);

  const [limit, _setLimit] = useState<number>(20);
  const [skip, _setSkip] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchProducts({ limit, skip }));
  }, [dispatch]);

  return (
    <Components.Container>
      <TopNavbar />
      <Components.PageWrapper>
        <Components.ProductsList>
          {products?.map((product: ProductDto) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Components.ProductsList>
        <ProductDetails />
      </Components.PageWrapper>
    </Components.Container>
  );
};

export default ProductsPage;
