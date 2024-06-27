import { Box, Grid } from "@mui/material";
import React from "react";
import { palette } from "../../theme/Palette";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import WishlistSection from "./WishlistSection";
import { pageLayoutStyle } from "../../utilities/contants";

const WishList = () => {
  return (
    <Box
      sx={{
        ...pageLayoutStyle,
      }}
    >
      <Grid sx={{ background: palette.black.light }}>
        <Header />
      </Grid>
      <WishlistSection />
      <Footer />
    </Box>
  );
};

export default WishList;
