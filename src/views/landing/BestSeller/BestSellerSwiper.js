import React, { Suspense, lazy } from "react";
import { Grid, Typography } from "@mui/material";
import OurProductSkelton from "../../../components/common/ProductCardSkelton";
const ShowProductDataSlider = lazy(() =>
  import("../../../components/ProductCard").then((module) => ({
    default: module.ShowProductDataSlider,
  }))
);

export default function BestSellerSwiper({ products }) {
  return (
    <>
      <Suspense fallback={<OurProductSkelton length={4} />}>
        <ShowProductDataSlider products={products} />
      </Suspense>

      {products.length === 0 && (
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ textAlign: "center", color: "grey" }}>
            Not Data Found
          </Typography>
        </Grid>
      )}
    </>
  );
}
