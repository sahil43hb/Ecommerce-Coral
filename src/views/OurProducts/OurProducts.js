import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import TabButton from "../../components/common/TabButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { ExploreSectionData } from "../../utilities/data/ExploreSection";
import ProductCard from "../../components/common/ProductCard";
import { Categories } from "../../utilities/data/DiscountOnInsta";
import { getFilterProducts } from "../../utilities/common";

const OurProducts = () => {
  const [selected, setSelected] = useState("All Products");
  const [currentCategory, setCurrentCategory] = useState("products");
  const [products, setProducts] = useState(ExploreSectionData);
  const tabHandleClick = async (data) => {
    setSelected(data.title);
    // setCurrentCategory(data.category);
    // const filterProducts = await getFilterProducts(data.category, products);
    // setProducts(filterProducts);
  };
  // useEffect(() => {
  //   getFilterProducts(data.category, products);
  // }, []);
  return (
    <Container maxwidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" textAlign="center">
        Our Products
      </Typography>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", pt: 5, pb: 3 }}
      >
        <Box spacing={2}>
          {Categories.map((data, index) => (
            <TabButton
              key={index}
              title={data.title}
              selected={data.title === selected ? true : false}
              onClick={() => tabHandleClick(data)}
              sx={{ mr: 3 }}
            />
          ))}
        </Box>
        <Button variant="contained" size="small" startIcon={<FilterAltIcon />}>
          Filter
        </Button>
      </Stack>
      <Grid container spacing={2}>
        {products.map((data, index) => (
          <ProductCard
            key={index}
            image={data.image}
            isSale={data.isSale}
            isHot={data.isHot}
            productName={data.productName}
            price={data.price}
            disPrice={data.discountPrice}
            category={data.category}
            type={data.type}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default OurProducts;
