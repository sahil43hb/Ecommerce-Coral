import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  getOurProducts,
  setCartProducts,
  setFavoriteProducts,
  setOurProducts,
} from "../redux/feature/productSlice";
import { toast } from "react-toastify";

export function useUpdateFavProducts() {
  const dispatch = useDispatch();
  const getAllProducts = useSelector(getOurProducts);
  async function submit(params) {
    console.log(params, "params");
    if (params.id === null || params.id === undefined) {
      throw new Error("ID NOT FOUND");
    }
    let filteredProducts = [];
    if (params.isFavorite !== null && params.isFavorite !== undefined) {
      console.log(params.isFavorite, "params.isFavorite");
      filteredProducts = getAllProducts.map((data) =>
        data.id === params.id
          ? { ...data, isFavorite: !params.isFavorite }
          : data
      );
      const favoriteProductData = filteredProducts.filter(
        (product) => product.isFavorite === true
      );
      dispatch(setFavoriteProducts(favoriteProductData));
    }
    if (params.isCart !== null && params.isCart !== undefined) {
      console.log(params.isCart, "params.isCart");
      filteredProducts = getAllProducts.map((data) =>
        data.id === params.id ? { ...data, isCart: !params.isCart } : data
      );

      const cartProductData = filteredProducts.filter(
        (product) => product.isCart === true
      );
      dispatch(setCartProducts(cartProductData));
    }
    const productFound = filteredProducts.some(
      (product) => product.id === params.id
    );
    if (!productFound) {
      throw new Error("Product Not Found");
    }
    return filteredProducts;
  }

  return useMutation({
    mutationFn: submit,
    onSuccess: (data) => {
      dispatch(setOurProducts(data));
      toast.success("sUpdated Successfully!");
    },
  });
}
