export const getFilterProducts = (category, allProducts) => {
  if (category && category === "products") {
    return allProducts;
  } else {
    const filterData = allProducts.filter((data) => data.category === category);
    return filterData === undefined && filterData === null ? [] : filterData;
  }
};
export const getFilterPrice = (value, allProducts) => {
  const [minPrice, maxPrice] = value;
  const filterData = allProducts.filter((product) => {
    const price = parseFloat(product.price.replace("$", ""));
    return price >= minPrice && price <= maxPrice;
  });
  return filterData;
};
