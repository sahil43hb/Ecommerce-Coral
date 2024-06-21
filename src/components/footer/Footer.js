import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CardMedia from "../common/CardMedia";
import logo from "../../assets/images/logo.svg";
import { palette } from "../../theme/Palette";
import {
  footerCatalogData,
  footerAboutData,
  footerCustomerServiceData,
  footerSocialMediaData,
} from "../../utilities/data/FooterSectionData";
import payment from "../../assets/images/payment.svg";
import NorthIcon from "@mui/icons-material/North";
import FooterText from "../common/FooterText";

const Footer = () => {
  const scrollToUP = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const HoverSx = {
    display: "block",
    "&:hover": {
      color: palette.primary.main,
      background: "none",
    },
  };
  return (
    <>
      <Container maxWidth="lg" sx={{ pt: 9, pb: 8 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CardMedia image={logo} sx={{ width: "180px", height: "34px" }} />
            <Box sx={{}}>
              <Typography
                variant="span-regular"
                sx={{ color: palette.black[400] }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </Box>
            <Stack
              direction="row"
              sx={{ width: "50%", justifyContent: "space-between" }}
            >
              {footerSocialMediaData.map((data, index) => (
                <CardMedia
                  key={index}
                  image={data.img}
                  sx={{ height: "25px", width: "25px" }}
                />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">CATALOG</Typography>
            <FooterText array={footerCatalogData} />
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">ABOUT US</Typography>
            <FooterText array={footerAboutData} />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">CUSTOMER SERVICES</Typography>
            <FooterText array={footerCustomerServiceData} />
          </Grid>
        </Grid>
      </Container>
      <Grid sx={{ background: palette.black.main }}>
        <Container maxWidth="lg">
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              py: 1.8,
            }}
          >
            <Typography
              variant="span-regular"
              sx={{ color: palette.white.main }}
            >
              © 2022 Coral , Inc.
            </Typography>
            <CardMedia
              image={payment}
              sx={{ width: "283px", height: "24px" }}
            />
            <Button
              variant="text"
              size="small"
              endIcon={<NorthIcon />}
              sx={{ color: palette.white.main }}
              onClick={scrollToUP}
            >
              Scroll to top
            </Button>
          </Stack>
        </Container>
      </Grid>
    </>
  );
};

export default Footer;
