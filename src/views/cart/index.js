import { Grid } from "@mui/material";
import React from "react";
import { palette } from "../../theme/Palette";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import CartSection from "./CartSection";

const Cart = () => {
  return (
    <>
      <Grid sx={{ background: palette.black.light }}>
        <Header />
      </Grid>
      <CartSection />
      <Footer />
    </>
  );
};

export default Cart;
