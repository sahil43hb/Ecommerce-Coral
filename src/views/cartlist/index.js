import { Box, Grid } from "@mui/material";
import React from "react";
import { palette } from "../../theme/Palette";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import CartSection from "./CartSection";
import { pageLayoutStyle } from "../../utilities/contants";

const Cart = () => {
  return (
    <Box
      sx={{
        ...pageLayoutStyle,
      }}
    >
      <Grid sx={{ background: palette.black.light }}>
        <Header />
      </Grid>
      <CartSection />
      <Footer />
    </Box>
  );
};

export default Cart;
