import { Container } from "@mui/material";
import React from "react";
import OurProduct from "./OurProducts";

const OurProducts = () => {
  return (
    <Container maxwidth="md" sx={{ py: 8 }} id={"ourProducts"}>
      <OurProduct />
    </Container>
  );
};

export default OurProducts;
