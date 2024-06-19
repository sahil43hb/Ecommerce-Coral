import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CardMedia from "../common/CardMedia";
import logo from "../../assets/images/logo.svg";
import { palette } from "../../theme/Palette";

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={3}>
          <CardMedia image={logo} sx={{ width: "180px", height: "34px" }} />
          <Typography variant="Span-3" sx={{ color: palette.black[400] }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Typography>
          <Stack sx={{}}></Stack>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">CATALOG</Typography>
          <Typography variant="A2">TEst</Typography>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
