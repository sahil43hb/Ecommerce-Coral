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
    if (params.id === null || params.id === undefined) {
      throw new Error("ID NOT FOUND");
    }
    let filteredProducts = [];
    let actionType = null;
    //wishlist
    if (params.isFavorite !== null && params.isFavorite !== undefined) {
      filteredProducts = getAllProducts.map((data) =>
        data.id === params.id
          ? { ...data, isFavorite: !params.isFavorite }
          : data
      );
      const favoriteProductData = filteredProducts.filter(
        (product) => product.isFavorite === true
      );
      dispatch(setFavoriteProducts(favoriteProductData));
      actionType = "favorite";
    }
    //cartList
    if (params.isCart !== null && params.isCart !== undefined) {
      filteredProducts = getAllProducts.map((data) =>
        data.id === params.id ? { ...data, isCart: !params.isCart } : data
      );
      const cartProductData = filteredProducts.filter(
        (product) => product.isCart === true
      );
      dispatch(setCartProducts(cartProductData));
      actionType = "cart";
    }
    const productFound = filteredProducts.some(
      (product) => product.id === params.id
    );
    if (!productFound) {
      throw new Error("Product Not Found");
    }
    return { filteredProducts, actionType };
  }

  return useMutation({
    mutationFn: submit,
    onSuccess: ({ filteredProducts, actionType }) => {
      dispatch(setOurProducts(filteredProducts));
      if (actionType === "favorite") {
        toast.success("Wishlist Updated Successfully!");
      } else if (actionType === "cart") {
        toast.success("Cartlist Updated Successfully!");
      }
    },
  });
}
