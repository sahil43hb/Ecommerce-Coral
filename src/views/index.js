import { Grid } from "@mui/material";
import React from "react";
import { palette } from "./../theme/Palette";
import HeroSection from "./HeroSection";
import ImageSection from "./BrandSection";
import { Header } from "../components/header";
import ExploreNewStyle from "./ExploreSection";
import SubscribeNewslatter from "./subscribeNewslatter/SubscribeNewslatter";
import { Footer } from "../components/footer";

const Landing = () => {
  return (
    <>
      <Grid sx={{ background: palette.black.light }}>
        <Header />
        <HeroSection />
      </Grid>
      <ImageSection />
      <ExploreNewStyle />
      <SubscribeNewslatter />
      {/* <Footer /> */}
    </>
  );
};

export default Landing;
