import { Grid } from "@mui/material";
import React from "react";
import { palette } from "../../theme/Palette";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import WishlistSection from "./WishlistSection";

const WishList = () => {
  return (
    <>
      <Grid sx={{ background: palette.black.light }}>
        <Header />
      </Grid>
      <WishlistSection />
      <Footer />
    </>
  );
};

export default WishList;
