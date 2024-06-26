import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TabButton from "../../../components/common/TabButton";
import { Categories } from "../../../utilities/data/DiscountOnInsta";
import BestSellerSwiper from "./BestSellerSwiper";
import { getFilterProductsbycategory } from "../../../utilities/common";
import { useSelector } from "react-redux";
import { getOurProducts } from "../../../redux/feature/productSlice";

const BestSeller = () => {
  const ourProducts = useSelector(getOurProducts);
  const [products, setProducts] = useState(ourProducts);
  const [selected, setSelected] = useState({
    type: "All Products",
    category: "products",
  });
  //Tabs
  const tabsHandleClick = (data) => {
    setSelected({ type: data.title, category: data.category });
  };
  //Felter
  useEffect(() => {
    const filterProducts = getFilterProductsbycategory(
      selected.category,
      ourProducts
    );
    setProducts(filterProducts);
  }, [selected.category, ourProducts]);

  return (
    <Container maxwidth="md" sx={{ py: 15 }} id="bestSection">
      <Typography variant="h2" textAlign="center">
        Best sellers
      </Typography>
      <Stack
        direction="row"
        sx={{ justifyContent: "space-between", pt: 5, pb: 2 }}
      >
        <Box spacing={2}>
          {Categories.map((data, index) => (
            <TabButton
              key={index}
              title={data.title}
              selected={data.title === selected.type ? true : false}
              onClick={() => tabsHandleClick(data)}
              sx={{ mr: 3 }}
            />
          ))}
        </Box>
      </Stack>
      <Box sx={{ height: "480px", alignContent: "center" }}>
        <BestSellerSwiper products={products} />
      </Box>
    </Container>
  );
};

export default BestSeller;
