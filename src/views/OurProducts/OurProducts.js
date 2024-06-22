import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import TabButton from "../../components/common/TabButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { ExploreSectionData } from "../../utilities/data/ExploreSection";
import ProductCard from "../../components/common/ProductCard";
import { Categories } from "../../utilities/data/DiscountOnInsta";
import { getFilterProducts } from "../../utilities/common";
import FilterModal from "../../components/model/FillterModel";
import { palette } from "../../theme/Palette";
import { useSelector } from "react-redux";

const OurProducts = () => {
  const pro = useSelector((state) => state.products.product);
  // console.log(pro, "prooo");
  const [selected, setSelected] = useState("All Products");
  const [currentCategory, setCurrentCategory] = useState("products");
  const [products, setProducts] = useState(pro);
  const [openModel, setOpenModel] = useState(false);
  const handleOpenModel = () => setOpenModel(true);
  const handleCloseModel = () => setOpenModel(false);
  const tabHandleClick = (data) => {
    setSelected(data.title);
    setCurrentCategory(data.category);
  };
  useEffect(() => {
    const filterProducts = getFilterProducts(
      currentCategory,
      ExploreSectionData
    );
    setProducts(filterProducts);
  }, [currentCategory]);
  //scroll behaviour
  const [isOverflow, setIsOverflow] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current) {
      const sectionHeight = sectionRef.current.scrollHeight;
      setIsOverflow(sectionHeight > 1020);
    }
  }, [products]);
  useEffect(() => {
    setProducts(pro);
  }, [pro]);

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
        <Box>
          <Button
            variant="contained"
            size="small"
            startIcon={<FilterAltIcon />}
            onClick={handleOpenModel}
          >
            Filter
          </Button>
          <FilterModal
            openModel={openModel}
            handleCloseModel={handleCloseModel}
          />
        </Box>
      </Stack>
      <Box sx={{ overflow: "auto", height: "1020px" }}>
        <Grid
          container
          spacing={2}
          ref={sectionRef}
          sx={{
            height: "1020px",
            overflowY: isOverflow ? "scroll" : "hidden",
            pr: 1,
            "&::-webkit-scrollbar": {
              "-webkit-appearance": "none",
              width: "10.26px",
              background: "#00000038",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "4px",
              backgroundColor: palette.primary.main,
              height: "150px",
            },
          }}
        >
          {products &&
            products.map((data, index) => (
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
          {products.length === 0 && (
            <Grid item xs={12}>
              <Typography variant="h2" sx={{ textAlign: "center" }}>
                Not Data Found
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default OurProducts;
