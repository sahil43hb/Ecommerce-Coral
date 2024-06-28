import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import TabButton from "../../../components/common/TabButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Categories } from "../../../utilities/data/DiscountOnInsta";
import { getFilteredAllProducts } from "../../../utilities/common";
import FilterModal from "../../../components/model/FillterModel";
import { palette } from "../../../theme/Palette";
import { useSelector } from "react-redux";
import {
  getFilterColor,
  getFilteredRangePrice,
  getOurProducts,
} from "../../../redux/feature/productSlice";
import OurProductSkelton from "../../../components/common/ProductCardSkelton";
const ShowProductData = lazy(() =>
  import("../../../components/ProductCard").then((module) => ({
    default: module.ShowProductData,
  }))
);

const OurProduct = () => {
  const ourProducts = useSelector(getOurProducts);
  const filteredColor = useSelector(getFilterColor);
  const filteredRangePrice = useSelector(getFilteredRangePrice);
  const [selected, setSelected] = useState({
    type: "All Products",
    category: "products",
  });
  console.log(ourProducts, "Products");
  //Model
  const [products, setProducts] = useState(ourProducts);
  const [openModel, setOpenModel] = useState(false);
  const handleOpenModel = () => setOpenModel(true);
  const handleCloseModel = () => setOpenModel(false);
  //Tabs
  const tabHandleClick = (data) => {
    setSelected({ type: data.title, category: data.category });
  };
  //Filter Data
  useEffect(() => {
    const allFilterProducts = getFilteredAllProducts(
      filteredRangePrice,
      filteredColor,
      selected.category,
      ourProducts
    );
    setProducts(allFilterProducts);
  }, [filteredRangePrice, ourProducts, selected.category, filteredColor]);
  //scroll behaviour
  const [isOverflow, setIsOverflow] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current) {
      const sectionHeight = sectionRef.current.scrollHeight;
      setIsOverflow(sectionHeight > 1020);
    }
  }, [ourProducts]);

  return (
    <>
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
              selected={data.title === selected.type ? true : false}
              onClick={() => tabHandleClick(data)}
              sx={{ mr: 3 }}
            />
          ))}
        </Box>
        <Box>
          <Button
            variant="contained"
            size="small"
            startIcon={<FilterAltIcon sx={{ fontSize: "20px !important" }} />}
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
          <Suspense fallback={<OurProductSkelton length={8} />}>
            <ShowProductData products={products} />
          </Suspense>

          {products.length === 0 && (
            <Grid item xs={12} sx={{ alignContent: "center" }}>
              <Typography
                variant="h3"
                sx={{ textAlign: "center", color: "grey" }}
              >
                Not Data Found
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default OurProduct;
