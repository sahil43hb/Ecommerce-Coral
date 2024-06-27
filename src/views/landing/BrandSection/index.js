import { Box, Container } from "@mui/material";
import React, { Suspense, lazy } from "react";
import BrandSkelton from "./BrandSkelton";
const BrandSectionImg = lazy(() => import("./BrandSection"));

const BrandSection = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 8, pb: 3 }} id="brandSection">
      <Suspense fallback={<BrandSkelton />}>
        <Box className="fade-in">
          <BrandSectionImg />
        </Box>
      </Suspense>
    </Container>
  );
};

export default BrandSection;
