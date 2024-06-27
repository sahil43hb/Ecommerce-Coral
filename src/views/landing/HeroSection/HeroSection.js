import { Grid, Typography, Button, Container } from "@mui/material";
import React from "react";
import HeroImg from "../../../assets/images/heroImg.svg";
import { CardMedia } from "../../../components/CardMedia";
import Lock from "../../../assets/images/Lock.svg";

const HeroSection = () => {
  return (
    <Container maxWidth="lg" id="heroSection">
      <Grid container sx={{ py: 8 }}>
        <Grid
          item
          xs={7}
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography variant="body1">Collections</Typography>
          <Typography variant="paragraph-large">
            You Can Explore And Shop Many Different Collections From Various
            Brands Here.
          </Typography>
          <Grid>
            <Button
              onClick={() =>
                window.scrollTo({
                  top: document.querySelector("#ourProducts").offsetTop,
                  behavior: "smooth",
                })
              }
              variant="contained"
              size="large"
              startIcon={
                <img
                  alt="not"
                  src={Lock}
                  style={{ height: "30px", width: "30px" }}
                />
              }
            >
              Shop Now
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <CardMedia image={HeroImg} sx={{ height: "542px", width: "424px" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
