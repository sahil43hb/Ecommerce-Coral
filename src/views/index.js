import { Grid } from "@mui/material";
import React from "react";
import { palette } from "./../theme/Palette";
import { HeroSection } from "./HeroSection";
import { BrandSection } from "./BrandSection";
import { Header } from "../components/header";
import { ExploreNewStyle } from "./ExploreSection";
import { OurProducts } from "./OurProducts";
import { Footer } from "../components/footer";
import { ProductsAndDiscount } from "./ProductsAndDiscount";
import { CollectionImage } from "./CollectionImage";
import { BestSeller } from "./BestSeller";

const Landing = () => {
  return (
    <>
      <Grid sx={{ background: palette.black.light }}>
        <Header />
        <HeroSection />
      </Grid>
      <BrandSection />
      <ExploreNewStyle />
      <OurProducts />
      <CollectionImage />
      <BestSeller />
      <Grid sx={{ background: palette.black.light }}>
        <ProductsAndDiscount />
      </Grid>
      <Footer />
    </>
  );
};

export default Landing;
