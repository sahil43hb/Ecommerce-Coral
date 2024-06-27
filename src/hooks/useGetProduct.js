import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getOurProducts } from "../redux/feature/productSlice";

export function useGetProducts(type) {
  const getAllProducts = useSelector(getOurProducts);
  function submit() {
    const favoriteProductData = getAllProducts.filter((product) =>
      type === "isFavorite"
        ? product.isFavorite === true
        : product.isCart === true
    );
    if (
      favoriteProductData &&
      favoriteProductData !== null &&
      favoriteProductData !== undefined
    ) {
      return favoriteProductData;
    }
  }

  return useQuery({
    queryKey: ["products"],
    queryFn: submit,
    enabled: false,
  });
}
