// Filter Through Tabs
export const getFilterProductsbycategory = (category, allProducts) => {
  if (category && category === "products") {
    return allProducts;
  } else {
    const filterData = allProducts?.filter(
      (data) => data.category === category
    );
    return filterData === undefined && filterData === null ? [] : filterData;
  }
};
// Filter Through Price Range
export const getFilterPrice = (value, allProducts) => {
  const [minPrice, maxPrice] = value;
  const filterData = allProducts?.filter((product) => {
    const price = parseFloat(product.price);
    const discountPrice = parseFloat(product.discountPrice);
    if (discountPrice) {
      return discountPrice >= minPrice && discountPrice <= maxPrice;
    } else {
      return price >= minPrice && price <= maxPrice;
    }
  });
  return filterData;
};
// Filter Through Colors
export const getFilteredColor = (colorData, products) => {
  const filteredColors = colorData
    ?.filter((item) => item.isSelected === true)
    .map((data) => data.color);
  const filteredColorData = products?.filter((product) =>
    filteredColors.includes(product.color)
  );
  return filteredColorData;
};
// Get length of wishlist and cartlist
export const getFilteredLength = (products) => {
  const filteredWishlistData = products.filter(
    (product) => product.isFavorite === true
  );
  const filteredCartlistData = products.filter(
    (product) => product.isCart === true
  );
  return {
    wishlistLength: filteredWishlistData.length,
    cartlistLength: filteredCartlistData.length,
  };
};
//Calculate Amount
export const calculateAmount = (cartData) => {
  let total = 0;
  cartData.map(
    (data) =>
      (total +=
        (data.discountPrice ? data.discountPrice : data.price) * data.quantity)
  );
  console.log(total, "da");
  return total;
};

export const getFilteredAllProducts = (
  range,
  colorData,
  category,
  allProducts
) => {
  const FilterProductsbycategory = getFilterProductsbycategory(
    category,
    allProducts
  );
  const filteredProductsPrice = getFilterPrice(range, FilterProductsbycategory);
  const filterProductsColor = getFilteredColor(
    colorData,
    filteredProductsPrice
  );
  return filterProductsColor;
};
