export const getFilterProducts = (category, allProducts) => {
  if (category === "products") {
    return allProducts;
  } else {
    return allProducts.slice(0, 4);
  }
  //   const filterProducts = allProducts.fi;
};
