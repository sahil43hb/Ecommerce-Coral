import React from "react";
import Image1 from "../../assets/images/ExploreSection/Image1.svg";
import CardMedia from "../../components/common/CardMedia";
import { Grid, Container, Typography, Box } from "@mui/material";
import { ExploreSectionData } from "../../utilities/data/ExploreSection";
import { verticalText } from "../../utilities/Contants";
import Ribbon from "../../components/common/Ribbon";
import { palette } from "../../theme/Palette";
import BottomHoverProductsBadge from "../../components/common/BottomHoverProductsBadge";

const ExploreNewStyle = () => {
  const exploreData = ExploreSectionData.slice(0, 4);
  return (
    <Container maxWidth="lg" sx={{ py: 6, maxWidth: "1372px !important" }}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={6.4}
          sx={{ display: "flex", pr: 1, position: "relative" }}
        >
          <Typography
            variant="body2"
            sx={{
              ...verticalText,
              pl: 0.8,
            }}
          >
            Explore new and popular styles
          </Typography>
          <Box
            sx={{
              position: "relative",
              "&:hover .hoverBadge": {
                opacity: 1,
                visibility: "visible",
                transition: "opacity 0.5s ease-in-out",
              },
            }}
          >
            <CardMedia image={Image1} sx={{ height: "648px" }} />
            <BottomHoverProductsBadge category="Manto" products="86" />
          </Box>
        </Grid>
        <Grid item xs={5.6}>
          <Grid container spacing={3}>
            {exploreData.map((data, index) => (
              <Grid item xs={6} key={index} sx={{ position: "relative" }}>
                <Box
                  sx={{
                    position: "relative",
                    "&:hover .hoverBadge": {
                      opacity: 1,
                      visibility: "visible",
                      transition: "opacity 0.5s ease-in-out",
                    },
                  }}
                >
                  {data.isSale && (
                    <Box sx={{ position: "absolute", top: "22px" }}>
                      <Ribbon color={palette.black.main} title="Sale" />
                    </Box>
                  )}
                  <CardMedia image={data.image} sx={{ height: "312px" }} />
                  <BottomHoverProductsBadge
                    category={data.category}
                    products={data.products}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExploreNewStyle;
