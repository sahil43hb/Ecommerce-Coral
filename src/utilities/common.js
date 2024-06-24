// Filter Through Tabs
export const getFilterProducts = (category, allProducts) => {
  if (category && category === "products") {
    return allProducts;
  } else {
    const filterData = allProducts.filter((data) => data.category === category);
    return filterData === undefined && filterData === null ? [] : filterData;
  }
};
// Filter Through Price Range
export const getFilterPrice = (value, allProducts) => {
  const [minPrice, maxPrice] = value;
  const filterData = allProducts.filter((product) => {
    const price = parseFloat(product.price?.replace("$", ""));
    const discountPrice = parseFloat(product.discountPrice?.replace("$", ""));
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
    .filter((item) => item.isSelected === true)
    .map((data) => data.color);
  const filteredColorData = products.filter((product) =>
    filteredColors.includes(product.color)
  );
  return filteredColorData;
};
