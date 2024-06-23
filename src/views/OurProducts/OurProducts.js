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
import { useDispatch, useSelector } from "react-redux";
import {
  getOurProducts,
  setFilterProducts,
} from "../../redux/feature/productSlice";

const OurProducts = () => {
  const dispatch = useDispatch();
  const ourProducts = useSelector(getOurProducts);
  const [selected, setSelected] = useState("All Products");
  const [currentCategory, setCurrentCategory] = useState("products");
  //Model
  const [products, setProducts] = useState(ourProducts);
  const [openModel, setOpenModel] = useState(false);
  const handleOpenModel = () => setOpenModel(true);
  const handleCloseModel = () => setOpenModel(false);
  //Tabs
  const tabHandleClick = (data) => {
    setSelected(data.title);
    setCurrentCategory(data.category);
  };
  //scroll behaviour
  const [isOverflow, setIsOverflow] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const filterProducts = getFilterProducts(
      currentCategory,
      ExploreSectionData
    );
    setProducts(filterProducts);
    dispatch(setFilterProducts(filterProducts));
  }, [currentCategory, dispatch]);
  useEffect(() => {
    setProducts(ourProducts);
    if (sectionRef.current) {
      const sectionHeight = sectionRef.current.scrollHeight;
      setIsOverflow(sectionHeight > 1020);
    }
  }, [ourProducts]);

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
            pr: isOverflow ? 1 : 0,
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
            <Grid item xs={12} sx={{ alignContent: "center" }}>
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
