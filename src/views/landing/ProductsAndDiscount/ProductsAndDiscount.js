import { Box, Container, Typography } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { EmailSubmit } from "../../../components/EmailSubmit";
import DiscountSectionSkelton from "./DiscountSectionSkelton";
const ProductImageSection = lazy(() => import("./ProductImageSection"));

const ProductsAndDiscount = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 14, pb: 3 }} id="productsAndDiscount">
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Follow Products And Discounts On Instagram
      </Typography>
      <Suspense fallback={<DiscountSectionSkelton />}>
        <ProductImageSection />
      </Suspense>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Or Subscribe To The Newsletter
      </Typography>
      <Box sx={{ py: 8 }}>
        <EmailSubmit />
      </Box>
    </Container>
  );
};

export default ProductsAndDiscount;
