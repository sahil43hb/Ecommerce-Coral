import React from "react";
import Image1 from "../assets/images/ExploreSection/Image1.svg";
import CardMedia from "../components/common/CardMedia";
import { Grid, Container, Typography, Box } from "@mui/material";
import { ExploreSectionData } from "../utilities/data/ExploreSection";
import { verticalText } from "../utilities/contants";
import Ribbon from "../components/common/Ribbon";
import { palette } from "../theme/Palette";
import BottomHoverProductsBadge from "../components/common/BottomHoverProductsBadge";

const ExploreNewStyle = () => {
  return (
    <Container maxwidth="md" sx={{ py: 6 }}>
      <Grid container spacing={2}>
        <Typography
          variant="body2"
          sx={{
            ...verticalText,
          }}
        >
          Explore new and popular styles
        </Typography>
        <Grid item xs={5.5} sx={{ display: "flex", pr: 1 }}>
          <CardMedia image={Image1} sx={{ height: "648px" }} />
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={3.5}>
            {ExploreSectionData.slice(0, 4).map((data, index) => (
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
